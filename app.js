require('newrelic');
const express = require('express');
const app = express();
const http = require('http');
const https = require('https');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


var ejs = require('ejs');
var port =  process.env.PORT || 5000;
// var msg = "Email was successfully sent!";

// View engine setup
app.set("view engine", "ejs");


//Static Folder
app.use(express.static(__dirname + "/public"));

// Body Parser setup
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.get("/", function(req, res){
  res.render('index.ejs');
});

app.get("/blog", function(req, res){
  res.render("blog.html");
})

app.post("/send", function(req, res){

  var output = `
    <p>You have a new message from your contact form!</p>
    <h3>Contact Deatils:</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
      <li>Message: ${req.body.message}</li>
    </ul>
  `;
  // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.stackmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'form@matthewchristopherjones.com', // generated ethereal user
            pass: 'Iv7812f46'  // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"MCJ Form" <form@matthewchristopherjones.com>', // sender address
        to: 'contact@matthewchristopherjones.com, 271films@gmail.com', // list of receivers
        subject: 'New Contact Form Submission!', // Subject line
        text: 'New form submission', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    });

//something is wrong with the line below. it redirects to Cannot GET /[object%20Object]
    res.redirect('/');


});


app.listen(port, function() {
   console.log("Listening on " + port);
 });
