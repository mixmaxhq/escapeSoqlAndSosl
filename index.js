module.exports = {
  /**
   * Escapes the following characters with backslashes (for use in SOQL QUERY queries):
   * ' \
   *
   * See SFDC API docs for more details:
   * https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_reservedcharacters.htm
   *
   * @param {String} str - search query to escape
   *
   * @returns {String} escapedString
   */
  escapeSOQL: (str) => str.replace(/(['\\])/g, '\\$&'),

  /**
   * Escapes the following characters with backslashes (for use in SOSL FIND queries):
   * ? & | ! { } [ ] ( ) ^ ~ * : \ " ' + -
   *
   * See SFDC API docs for more details:
   * https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_find.htm
   *
   * @param {String} str - search query to escape
   *
   * @returns {String} escapedString
   */
  escapeSOSL: (str) => str.replace(/([?&|!{}[\]()^~*:\\"'+-])/g, '\\$&'),
};
