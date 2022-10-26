# simple-express-nodemailer
Basic express nodemailer implementation. 

## Configuration
- `cd` into the directory and run `npm install`

- Open your code editor of choice and change the `.env` file with your credentials. Example:
```
MAIL_USER=user_here
MAIL_PASS=password_here
MAIL_HOST=host_here
MAIL_PORT=port_here
```

## Usage
After installation, run `node index.js`

Go into your Postman (or any similar application) and create a POST request to `http://localhost:<portnumber>/api/v1/sendmail` with the following payload:

```
  {
      "from": "testsender@test.com",
      "to": "testreceiver@test.com",
      "subject": "Test email",
      "body": "Test body"
  }
```

Adjust the payload as needed. 

## HTML Templates
The server will send an HTML template to the email provider. Adjust the HTML file's content located in `/templates/mail.html` as needed.
