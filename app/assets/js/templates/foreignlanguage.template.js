define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["foreignlanguage.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n";
  stack1 = helpers.each.call(depth0, depth0.translations, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<div class=\"definition\">\n  <div class=\"translation\">\n    ";
  stack1 = helpers.each.call(depth0, depth0.terms, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  <div class=\"sense\">";
  if (stack1 = helpers.sense) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.sense; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div> <hr>\n</div>\n";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"termgroup\">\n        <span class=\"term\">";
  if (stack1 = helpers.term) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.term; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span><span class=\"POS\">";
  if (stack1 = helpers.POS) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.POS; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    </div>\n    ";
  return buffer;
  }

  buffer += "<div class=\"definitions\">\n";
  stack1 = helpers['with'].call(depth0, depth0.term0, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

return this["JST"];

});