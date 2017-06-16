# escapeSoqlAndSosl

Escape Salesforce SOQL queries and SOSL searches. Can be used standalone or in conjunction with JSForce.

### Installation

```
> npm install --save-dev escape-soql-and-sosl
```

### Usage

```js
const {escapeSOQL, escapeSOSL} = require('escape-soql-and-sosl');
const jsforce = require('jsforce');

const conn = ...

const query = `FIND {@${escapeSOSL('pride-feat-dangelo.com')}} IN email FIELDS RETURNING Contact(Id, AccountId WHERE AccountId != null)`;
conn.search(query);
```

### License

The [MIT License](LICENSE).
