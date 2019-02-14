const express = require('express');
const router = require('express').Router();
const mongoose = require('mongoose');
const { ensureAuthenticated } = require('../helpers/auth');
require('../models/Idea')
const Ideas = mongoose.model('Ideas')



router.get('/', ensureAuthenticated, (req, res) => {
    Ideas.find({ user: req.user.id })
        .sort({ date: 'desc' })
        .then((idea) => {
            res.render('ideas/index', {
                ideas: idea
            });
        })

});

router.get('/add', ensureAuthenticated, (req, res) => {
    res.render('ideas/add');
});

router.get('/edit/:id', ensureAuthenticated, (req, res) => {
    console.log(req.params.id);

    Ideas.findOne({
        _id: req.params.id

    })
        .then((idea) => {
            if (idea.user != req.user.id) {
                req.flash('error_msg', 'Not Authorized');
                res.redirect('/ideas');
            } else {
                res.render('ideas/edit', {
                    ideas: idea
                });
            }

        });

});
//process forms
router.post('/', ensureAuthenticated, (req, res) => {
    errors = [];
    if (!req.body.title) {
        errors.push({ text: "Please add a title" })
    }
    if (!req.body.details) {
        errors.push({ text: "Please add some detail" })
    }
    if (errors.length > 0) {
        res.render('ideas/add', {
            errors: errors,
            title: req.body.title,
            details: req.body.details
        })
    } else {
        const newUser = {
            title: req.body.title,
            details: req.body.details,
            user: req.user.id
        }
        new Ideas(newUser)
            .save()
            .then((idea) => {
                req.flash('success_msg', 'Video idea added successfully');
                res.redirect('./ideas')
            })

    }


});

router.put('/:id', ensureAuthenticated, (req, res) => {
    Ideas.findOne({
        _id: req.params.id
    }).then((idea) => {
        idea.title = req.body.title;
        idea.details = req.body.details;

        idea.save()
            .then((idea) => {
                req.flash('success_msg', 'Video idea updated successfully');
                res.redirect('/ideas');
            })
    });


});

// delete Ideas
router.delete('/:id', (req, res) => {
    Ideas.remove({ _id: req.params.id }).then(() => {
        req.flash('success_msg', 'Video idea removed');
        res.redirect('/ideas')
    })
    //user loging route
});



module.exports = router;