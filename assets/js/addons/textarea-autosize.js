/*!
 * textarea autosize v0.4.2
 * https://github.com/javierjulio/textarea-autosize
 */
!function(a,b,c,d){function h(b,c){this.element=b,this.$element=a(b),this.init()}var e="textareaAutoSize",f="plugin_"+e,g=function(a){return a.replace(/\s/g,"").length>0};h.prototype={init:function(){var c=parseInt(this.$element.css("paddingBottom"))+parseInt(this.$element.css("paddingTop"))+parseInt(this.$element.css("borderTopWidth"))+parseInt(this.$element.css("borderBottomWidth"))||0;g(this.element.value)&&this.$element.height(this.element.scrollHeight-c),this.$element.on("input keyup",function(d){var e=a(b),f=e.scrollTop();a(this).height(0).height(this.scrollHeight-c),e.scrollTop(f)})}},a.fn[e]=function(b){return this.each(function(){a.data(this,f)||a.data(this,f,new h(this,b))}),this}}(jQuery,window,document);
