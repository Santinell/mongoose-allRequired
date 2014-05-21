mongoose-allRequired
====================

Simple mongoose plugin for fixed schemas


USING
=====
```javascript
var allRequired = require('mongoose-allrequired');

User = new Schema({
  _id: Number,
  login: String,
  password: String,
  sessionId: String,
  role: String
});

//all fields will be required
User.plugin(allRequired);
```

