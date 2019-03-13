# ISE Logging Messages
When looking up active sessions, ISE returns a detailed list of execution steps which are referenced using the message ID. Unfortunately, the "resolved" message is not provided programmatically. So, I had to make a reference in JSON format myself. While I'm sure this could be further automated, this was a one time thing and thus I just did it somewhat manually. Just in case, the process is documented here.

ISE Messages can be retrieved from [this link](https://www.cisco.com/c/en/us/td/docs/security/ise/2-6/Cisco_ISE_Syslogs/Cisco_ISE_Syslogs/Cisco_ISE_Syslogs_chapter_01.html). In order to make them usable, copy and paste the actual message (the bullet point list) into a plain text editor that supports regular expression find/replace.

## Processing Steps
### Get relevant data
This regular express will get the needed info (message code, severity, text, and description) in regex groups:

Find:
```regex
Message Code: ([0-9]+)\n+Severity: ([a-zA-Z]+)\n+Message Text: ([\S ]+)\s+Message Description: ([\S ]+)\n+.*\n+.*
```
Replace:
```
"$1": { \n\tcode: $1, \n\tseverity: "$2", \n\ttext: "$3", \n\tdescription: "$4" \n},
```
This gets the bulk of the work done.

### Clean up remaining junk
Unfortunately, there were headers throughout the content for different message topics. We need to clear those next. All of those are only text-based strings on a line by themselves.

Find:
```
^[a-zA-Z ]$
```

Replace with nothing.

### Clean up whitespace
We have our message data now, but let's clean up unnecessary whitespace.

Find
```
^\n
```

Replace with nothing.

### Make importable JavaScript
Now save the file as a `.js` file and indent the whole file one level and create a constant called `messages` to put it in.

```
var messages = {
  <file contents>
}
```

This can now be imported into a JavaScript file as a JSON object.