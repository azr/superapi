module.exports = function(grunt) {
  grunt.registerMultiTask('browser', "Export the object in <%= package.name %> to the window", function() {
    this.files.forEach(function(f) {
      var output = ["(function(globals) {"];

      output.push.apply(output, f.src.map(grunt.file.read));

      output.push('window.<%= package.name %> = requireModule("<%= package.name %>");');
      output.push('})(window);');

      grunt.file.write(f.dest, grunt.template.process(output.join("\n")));
    });
  });
}
