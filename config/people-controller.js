// ./controllers/people-controller.js

const express = require('express')
const router = express.Router()

///////////////////////////////
// ROUTES
////////////////////////////////

// PEOPLE INDEX ROUTE
router.get("/", async (req, res) => {
	res.status(200).json({message: "people index route"})
});

// PEOPLE CREATE ROUTE
router.post("/", async (req, res) =>  {
	res.status(201).json({message: "people create route"})
});

router.get("/:id", async (req, res) => {
    res.status(200).json({message: "people show route"})
})

module.exports = router
