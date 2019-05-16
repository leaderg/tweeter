"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
        db.collection("tweets").insertOne(newTweet);
        callback(null, true);
    },

    // Calls mongo db array, waits until arrives, then sorts and sends array of Tweet objects
    getTweets: function(callback) {
      db.collection("tweets").find().toArray((err, results) => {
        if (err) throw err;
        const sortNewestFirst = (a, b) => b.created_at - a.created_at;
        callback(null, results.sort(sortNewestFirst));
      });
    }
  }
};
