$("#registerForm").validate({
 		    rules: {
 		        'registerForm:fname': {
 		            required: true,
 		            minlength: 2,
 		            maxlength: 30
 		        },
 				'registerForm:lname': {
 		            required: true,
 		            minlength: 2,
 		            maxlength: 30
 		        },
 				'registerForm:address': {
 		            required: true,
 		            minlength: 2,
 		            maxlength: 30
 		        },
 		       'registerForm:city': {
		            required: true,
		            minlength: 2,
		            maxlength: 30
		        },
		        'registerForm:state': {
		            required: true,
		            minlength: 2,
		            maxlength: 30
		        },
		        'registerForm:zip': {
		            required: true,
		            minlength: 2,
		            maxlength: 30
		        },
		        'registerForm:email': {
		            required: true,
		            minlength: 2,
		            maxlength: 30
		        },
		        'registerForm:password': {
		            required: true,
		            minlength: 2,
		            maxlength: 30
		        },
 			    'registerForm:password': {
 		            required: true,
 					minlength: 8,
 		            maxlength: 200,
/* 					hasLetterAndNumber : '#password',
 					noSapces : '#password',
 					notEqualToFirstName: ['register:fname' ],
 				    notEqualToLastName:  ['register:lastname'],
 					notEqualToUserName:  ['register:userId'],
 				    notEqualToEmail:     ['register:email']*/
 		        }
 				/*'registerForm:confirm_password': {
 					required: true,
 					matchPasswords: ['register:password']
 		        }*/
 		    },
 		   messages: {
 		        'register:fname': {
 		            required: "Enter your First Name",
 		            minlength: "Your First Name should contain atleast 2 characters",
 		            maxlength: "Your First Name cannot exceed 30 characters",
 		        },
 				'register:lname': {
 		            required: "Enter your Last Name",
 		            minlength: "Your Last Name should contain atleast 2  characters",
 		            maxlength: "Your Last Name cannot exceed 30 characters"
 		        },
 				'register:userId': {
 		            required: "Enter your Username",
 		            minlength: "Your Username must be at least 5 characters",
 		            maxlength: "Your Username cannot exceed 50 characters" 		            
 		        },
 		        'register:email': {
 		            required: "Enter your Email",
 		            email: "Enter a valid Email",
 		            minlength: "Your Email must be at least 5 characters",
 		            maxlength: "Your Email cannot exceed 50 characters",
 		       },
 			    'register:emailAgain': {
 					required: "Enter your Email again",
 					equalTo: "Emails do not match" 
 				},
 				'register:password': {
 		            required: "Choose a Password",
 		            minlength: "Your Password must be at least 8 characters",
 		            maxlength: "Your Password cannot exceed 50 characters",
/* 		            noSapces:  "Your Password cannot contain spaces",
 		            notEqualToFirstName: "Your password should not contain the firstname",
 		            notEqualToLastName: "Your password should not contain the lastname",
 		            notEqualToUserName: "Your password should not contain the user name",
 		            notEqualToEmail: "Your password should not contain the email"*/
 		       }
 			   /*'register:passwordAgain': {
 					required: "Enter your Password again",
 					equalTo: "Passwords do not match" 
 				}*/
 		    } 
 		});

