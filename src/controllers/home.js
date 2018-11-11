//
// This is the controller for POST requests sent to /
//

// We use async functions, in order to use the async await syntax later on
async function handle (req, res) {

   // Run some backend code here, validate data etc etc

   res.json({ success: true }); // Return some JSON to the user

}

module.exports.handle = handle; // Export the handle function