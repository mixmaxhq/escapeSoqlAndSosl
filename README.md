# escapeSoqlAndSosl

Escape Salesforce SOQL queries and SOSL searches. Can be used standalone or in conjunction with JSForce.

### Installation

```
> npm install --save-dev escapeSoqlAndSosl
```

### Usage

```js
const {escapeSOQL, escapeSOSL} = require('escapeSoqlAndSosl');
const jsforce = require('jsforce');

const conn = ...

const query = `FIND {@${escapeSOSL('pride-feat-dangelo.com')}} IN email FIELDS RETURNING Contact(Id, AccountId WHERE AccountId != null)`;
conn.search(query);
```

### License

The [MIT License](LICENSE).
