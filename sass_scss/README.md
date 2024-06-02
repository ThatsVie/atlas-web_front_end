# SASS & SCSS

## Learning Objectives

### What does Sass mean?

Sass (Syntactically Awesome StyleSheets) is a CSS preprocessor that allows you to write more efficient, maintainable, and scalable CSS. It extends the capabilities of CSS with features like variables, nested rules, mixins, and more, making it easier to manage complex stylesheets.

### How do we write Sass & Scss files?
Sass offers two syntax options:

Sass (Indented Syntax) uses indentation rather than braces and semicolons. Example:
```
$primary-color: #333
body
  color: $primary-color
```

SCSS (Sassy CSS) is a more CSS-like syntax, which uses braces and semicolons. Example from **Task 1**:
```
$text-color: #3D3D3D;
body {
  color: $text-color;
}
p {
  color: $text-color;
}
```

### What is the difference between Sass and Scss?

Sass (Indented Syntax) is older syntax, uses indentation, no braces or semicolons.

SCSS (Sassy CSS) is newer syntax, similar to CSS, uses braces and semicolons.

### What is Sass preprocessing?

Sass preprocessing involves converting Sass/SCSS files into standard CSS files that browsers can understand. This process includes expanding variables, resolving nested rules, compiling mixins, and other preprocessing tasks. Example from **Task 0**:
```
sass 0-debug_log.scss | head -n 0
```
This command preprocesses the SCSS file and outputs the compiled CSS.

### How do we delare a variable in Sass?
Variables in Sass allow you to store values that you can reuse throughout your stylesheet. Example from **Task 2**:
```
$gray-text: #3D3D3D;
$dim-gray-background: #6D6D6D;

body {
  color: $gray-text;
  background-color: $dim-gray-background;
}
```
### How do we use nested definition?
Nested definitions allow you to nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. Example from **Task 3**:
```
body {
  margin: 0px;
  padding: 0px;
  p {
    margin: 10px;
  }
}
```

### How do we import a Sass file?
The `@import` directive allows you to split your CSS into smaller, more manageable files and import them where needed. Example from **Task 10**:
```
@import '10-colors';

.red {
  color: $red;
}
.green {
  color: $green;
}
.blue {
  color: $blue;
}
```

### How do we use mixins?
Mixins allow you to create reusable chunks of code. Example from **Task 8**:
```
$body-margin: 10px;
$div-margin: 15px;

@mixin set-margin($margin) {
  margin-left: $margin;
  margin-right: $margin;
}

body {
  @include set-margin($body-margin);
}

div {
  @include set-margin($div-margin);
}
```

### How do we declare extend/inheritance styles?
The `@extend` directive allows one selector to inherit the styles of another. Example from **Task 9**:
```
.info {
  font-size: 12px;
}

.success {
  @extend .info;
  color: #00FF00;
}

.warning {
  @extend .info;
  color: #FF0000;
}
```
### How do we manipulate operators?
Sass allows the use of operators for various arithmetic and string operations. Example from **Task 12**:
```
@for $i from 1 through 5 {
  h#{$i} {
    font-size: #{$i}px;
  }
}
```
### References to Tasks

**Task 0**: Demonstrates preprocessing with @debug.

**Task 1**: Shows variable declaration.

**Task 2**: Uses variables for color assignment.

**Task 3**: Demonstrates nested definitions.

**Task 8**: Uses mixins for margin settings.

**Task 9**: Shows extend/inheritance styles.

**Task 10**: Demonstrates importing Sass files.

**Task 12**: Uses @for loop and manipulation of operators for dynamic font sizes.


## Tasks & Usage

### Task 0 - Write a Sass file that prints Hello world in the debug output

To test, input this command in your terminal:
```
sass 0-debug_log.scss | head -n 0
```
`sass 0-debug_log.scss` runs the Sass preprocessor on the file `0-debug_log.scss`. Sass processes the SCSS file and outputs the compiled CSS. Since the file contains a `@debug` statement, it will print debug information to the standard error (stderr) stream.

`| head -n 0` is a pipe (|) to the head command, which is used to output the first few lines of a file. The `-n 0` option specifies that head should output zero lines of the input. This part of the command filters the standard output (stdout) stream, but it does not affect the standard error (stderr) stream.

![image](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/3840b9bf-1a36-4d1f-870d-b69f7ac90c57)


`0-debug_log.scss:2` indicates the file name (`0-debug_log.scss`) and the line number (2) where the `@debug` statement is located.

`DEBUG: Hello world` is the actual message output by the `@debug` statement in your Sass file.

The output confirms that the `@debug` directive in the Sass file is correctly printing the "Hello world" message to the debug output.

### Task 1 - Write a Sass file that assigns the text color #3D3D3D to the HTML tags body and p. You must use a Sass variable

To test, input this command in your terminal:
```
sass 1-color_variable.scss | tail -n +2
```

The command processes the SCSS file `1-color_variable.scss` to produce the corresponding CSS.

`| tail -n +2` is a pipe (|) to the tail command which outputs lines starting from the second line onward, removing the first line of the output to show the CSS code.
![image](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/cf946a90-03de-4753-9192-b8a53ece0f02)

The command processes the SCSS file `1-color_variable.scss` to produce the corresponding CSS, then removes the first line of the output to give a view of the CSS code that styles the `body` and `p` tags with the color `#3D3D3D`.

### Task 2 - Write a Sass file that assigns: The text color `#3D3D3D` to the HTML tags `body` and `p`, The background color `#6D6D6D` to the HTML tags `body` and `h2`, and You must use 2 Sass variables

To test, input this command in your terminal:
```
sass 2-color_variables.scss | tail -n +2
```

`sass 2-color_variables.scss` runs the Sass preprocessor on the file `2-color_variables.scss`. Sass processes the SCSS file and outputs the compiled CSS.

`| tail -n +2` is a pipe (|) to the `tail` command, which is used to output the last part of files. The `-n +2` part specifies that tail should start outputting from the second line onward. This skips the first line of the output from the sass command.

![image](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/66fa6fa6-0bc1-4375-a4d6-4d08ea3ff514)

The output CSS code assigns the text color `#3D3D3D` to the `body` and `p` tags and the background color `#6D6D6D` to the `body` and `h2` tags.

### Task 3 - Write a Sass file that assigns no margin or padding to `body` tags, margin of 10px to all `p` tags inside `body` tags and You must use nested declarations.

To test, input this command in your terminal:
```
sass 3-nested_tag.scss | tail -n +2
```

`sass 3-nested_tag.scss` runs the Sass preprocessor on the file `3-nested_tag.scss`. Sass processes the SCSS file and outputs the compiled CSS.

`| tail -n +2` is a pipe (`|`) to the `tail` command, which outputs lines starting from the second line onward, removing the first line of the output to show the CSS code.

![image](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/f541793b-0014-433a-aa18-ee641f4b1965)

The output CSS code assigns no margin or padding to the `body` tags and a margin of 10px to all `p` tags inside `body` tags using nested declarations.

### Task 4 - Write a Sass file that assigns Text color `#3D3D3D` to elements inside `body` tags, Text color `#FF0000` to any elements of class `.red` inside `body` tags and You must use nested declarations.

To test, input this command in your terminal:
```
sass 4-nested_class.scss | tail -n +2
```

`sass 4-nested_class.scss` runs the Sass preprocessor on the file `4-nested_class.scss`. Sass processes the SCSS file and outputs the compiled CSS.

`| tail -n +2` is a pipe (`|`) to the `tail` command, which outputs lines starting from the second line onward, removing the first line of the output to show the CSS code.

![image](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/b6261b4c-c42e-45dd-b05d-5643b538725d)

The output CSS code assigns text color `#3D3D3D` to elements inside `body` tags and text color `#FF0000` to any elements of class `.red` inside `body` tags using nested declarations.

### Task 5 - Write a Sass file that assigns Text color `#3D3D3D` to elements inside `body` tags, Text color `#FF0000` to any elements of class `.red` that are the first children of the `body` and You must use nested declarations.

To test, input this command in your terminal:
```
sass 5-nested_child.scss | tail -n +2
```

`sass 5-nested_child.scss` runs the Sass preprocessor on the file `5-nested_child.scss`. Sass processes the SCSS file and outputs the compiled CSS.

`| tail -n +2` is a pipe (`|`) to the `tail` command, which outputs lines starting from the second line onward, removing the first line of the output to show the CSS code.

![image](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/277a6914-cafc-4ebb-9faa-51180a4269a0)

The output CSS code assigns text color `#3D3D3D` to elements inside `body` tags and text color `#FF0000` to any elements of class `.red` that are the first children of the `body` using nested declarations.

### Task 6 - Write a Sass file that assigns Text color to `button` tags, Changes text color when the user hovers over `button` tags and You must use nested declarations.

To test, input this command in your terminal:
```
sass 6-nested_hover.scss | tail -n +2
```

`sass 6-nested_hover.scss` runs the Sass preprocessor on the file `6-nested_hover.scss`. Sass processes the SCSS file and outputs the compiled CSS.

`| tail -n +2` is a pipe (`|`) to the `tail` command, which outputs lines starting from the second line onward, removing the first line of the output to show the CSS code.

![image](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/4a0f4f02-14b7-4094-82d3-cbba6ef8cb0a)

The output CSS code assigns text color to `button` tags and changes the text color when the user hovers over `button` tags using nested declarations.

### Task 7 - Write a Sass file that assigns Font size 14px to all `body` tags, Font size 16px to all `h1` tags inside `body` tags, and Font size 12px to `h1` tags of class `.smaller` inside `body` tags. You must use nested declarations.

To test, input this command in your terminal:
```
sass 7-nested_deeper.scss | tail -n +2
```

`sass 7-nested_deeper.scss` runs the Sass preprocessor on the file `7-nested_deeper.scss`. Sass processes the SCSS file and outputs the compiled CSS.

`| tail -n +2` is a pipe (`|`) to the `tail` command, which outputs lines starting from the second line onward, removing the first line of the output to show the CSS code.

![image](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/1713d881-d4d7-4487-a3a9-57617fd151c6)

The output CSS code assigns font size 14px to all `body` tags, font size 16px to all `h1` tags inside `body` tags, and font size 12px to `h1` tags of class `.smaller` inside `body` tags using nested declarations.

### Task 8 - Write a Sass file that assigns Margin left and right at 10px to `body` tags, Margin left and right at 15px to `div` tags. You must use a mixin.

To test, input this command in your terminal:
```
sass 8-mixin_margins.scss | tail -n +2
```

`sass 8-mixin_margins.scss` runs the Sass preprocessor on the file `8-mixin_margins.scss`. Sass processes the SCSS file and outputs the compiled CSS.

`| tail -n +2` is a pipe (`|`) to the `tail` command, which outputs lines starting from the second line onward, removing the first line of the output to show the CSS code.

![image](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/8220ec5c-de17-43f5-b8fe-fd6b08cb0ca5)

The output CSS code assigns margin left and right at 10px to `body` tags and margin left and right at 15px to `div` tags using a mixin.

### Task 9 - Write a Sass file that assigns Font size 12px to all tags of class `.info`, Text color `#00FF00` to all tags of class `.success` and extend the style of the class `.info`, Text color `#FF0000` to all tags of class `.warning` and extend the style of the class `.info`

To test, input this command in your terminal:
```
sass 9-extend_list.scss | tail -n +2
```

`sass 9-extend_list.scss` runs the Sass preprocessor on the file `9-extend_list.scss`. Sass processes the SCSS file and outputs the compiled CSS.

`| tail -n +2` is a pipe (`|`) to the `tail` command, which outputs lines starting from the second line onward, removing the first line of the output to show the CSS code.

![image](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/5eacab6e-778f-4cb2-bbbe-53961f7b1e05)

The output CSS code assigns font size 12px to all tags of class `.info`, text color `#00FF00` to all tags of class `.success` (extending the style of the class `.info`), and text color `#FF0000` to all tags of class `.warning` (extending the style of the class `.info`).

### Task 10 - Write a Sass file that assigns Text color `$red` from `10-colors.scss` to the class `.red`, Text color `$green` from `10-colors.scss` to the class `.green`, Text color `$blue` from `10-colors.scss` to the class `.blue`. You must use `@import`.

To test, input this command in your terminal:
```
sass 10-import_colors.scss | tail -n +3
```

`sass 10-import_colors.scss` runs the Sass preprocessor on the file `10-import_colors.scss`. Sass processes the SCSS file and outputs the compiled CSS.

`| tail -n +3` is a pipe (`|`) to the `tail` command, which outputs lines starting from the third line onward, removing the first two lines of the output to show the CSS code.

![image](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/816820eb-87fb-46a6-a697-c1461da7a251)

The output CSS code assigns text color `$red` from `10-colors.scss` to the class `.red`, text color `$green` from `10-colors.scss` to the class `.green`, and text color `$blue` from `10-colors.scss` to the class `.blue` using `@import`.

### Task 11 - Write a Sass file that creates a class for each name in the list `$list-names` and assigns the background image based on the name. You must use `@import` and `@each` statement.

To test, input this command in your terminal:
```
sass 11-loop_photos.scss | tail -n +3
```

`sass 11-loop_photos.scss` runs the Sass preprocessor on the file `11-loop_photos.scss`. Sass processes the SCSS file and outputs the compiled CSS.

`| tail -n +3` is a pipe (`|`) to the `tail` command, which outputs lines starting from the third line onward, removing the first two lines of the output to show the CSS code.

![image](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/ea3404ad-d4a4-4e8b-8f72-eb608b2c1c9f)

The output CSS code creates a class for each name in the list `$list-names` and assigns the background image based on the name using `@import` and `@each` statement.

### Task 12 - Write a Sass file that creates H* tags, where ‘*’ is the size of the font used.  h1 must have a font size equal to 1px, h2 must have a font size equal to 2px, h3 must have a font size equal to 3px, h4 must have a font size equal to 4px, h5 must have a font size equal to 5px. You must use the `@for` statement.

To test, input this command in your terminal:
```
sass 12-loop_header.scss | tail -n +2
```

`sass 12-loop_header.scss` runs the Sass preprocessor on the file `12-loop_header.scss`. Sass processes the SCSS file and outputs the compiled CSS.

`| tail -n +2` is a pipe (`|`) to the `tail` command, which outputs lines starting from the second line onward, removing the first line of the output to show the CSS code.

![image](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/3c7332d5-27d8-467f-8afc-2fe0c0682af2)

The output CSS code creates H* tags with font sizes corresponding to the tag number (h1 with 1px, h2 with 2px, etc.) using the `@for` statement.

### Task 13 - Write a Sass file that creates classes with different widths. `.col-1` with width equal to 100%, `.col-2` with width equal to 50%, `.col-3` with width equal to 33.3333333333% and `.col-4` with width equal to 25%. You must create `.col-*` class from 1 to 4 using the `@for` statement.

To test, input this command in your terminal:
```
sass 100-loop_col.scss | tail -n +2
```

`sass 100-loop_col.scss` runs the Sass preprocessor on the file `100-loop_col.scss`. Sass processes the SCSS file and outputs the compiled CSS.

`| tail -n +2` is a pipe (`|`) to the `tail` command, which outputs lines starting from the second line onward, removing the first line of the output to show the CSS code.

![image](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/edbf8949-4021-4758-80f7-0f0e2e20fae0)

The output CSS code creates `.col-*` classes with different widths using the `@for` statement.

### Task 14 - Write a Sass file that assigns Font size 20px to `h1` tags and Font size 14px to `h1` tags when the screen width is smaller than 320px

To test, input this command in your terminal:
```
sass 101-media_query.scss | tail -n +2
```

`sass 101-media_query.scss` runs the Sass preprocessor on the file `101-media_query.scss`. Sass processes the SCSS file and outputs the compiled CSS.

`| tail -n +2` is a pipe (`|`) to the `tail` command, which outputs lines starting from the second line onward, removing the first line of the output to show the CSS code.

![image](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/fa603972-e520-4b8c-bc9d-8a339300f06c)

The output CSS code assigns font size 20px to `h1` tags and changes the font size to 14px when the screen width is smaller than 320px.

### Task 15 - Write a Sass file that assigns Font size 20px to `h1` tags, Font size 18px to `h1` tags when the screen width is smaller than 960px, Font size 16px to `h1` tags when the screen width is smaller than 640px, Font size 14px to `h1` tags when the screen width is smaller than 320px, and Text color `#1D1D1D` to `h1.small` tags when the screen width is smaller than 320px.

To test, input this command in your terminal:
```
sass 102-media_query.scss | tail -n +2
```

`sass 102-media_query.scss` runs the Sass preprocessor on the file `102-media_query.scss`. Sass processes the SCSS file and outputs the compiled CSS.

`| tail -n +2` is a pipe (`|`) to the `tail` command, which outputs lines starting from the second line onward, removing the first line of the output to show the CSS code.

![image](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/f9489b80-5d52-4598-a923-995e4a408346)

The output CSS code assigns different font sizes to `h1` tags based on screen width and assigns text color `#1D1D1D` to `h1.small` tags when the screen width is smaller than 320px.



### Task 16 - Write a Sass file that sorts the variable `$list_to_sort` and prints the sorted list in the debug output

**Failed Approach - Direct String Comparison**

Reason for Failure:

Sass does not support direct string comparison operations like < or > for strings. This caused errors such as Undefined operation: "a lt b".

**Failed Approach - Custom Sorting with String Length** 

Reason for Failure:

Sass does not support direct string comparison operations even when comparing substrings. This caused errors like Undefined operation: "j gt a"

**Successful Approach - Using ASCII Values for String Comparison**
By using ASCII values for character comparison and implementing a custom quick-sort algorithm, we successfully sorted the list of strings.

To test, input this command in your terminal:
```
sass 103-sort_strings.scss | tail -n +2
```

`sass 103-sort_strings.scss` runs the Sass preprocessor on the file `103-sort_strings.scss`. Sass processes the SCSS file and outputs the sorted list in the debug output.

`| tail -n +2` is a pipe (`|`) to the `tail` command, which outputs lines starting from the second line onward, removing the first line of the output to show the debug message.

![image](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/9f1e2a46-38e6-42dc-87bc-12282cefe90c)

The output shows the sorted list `anna carrie felicia john kim zoe` printed in the debug output.

**How this works**:

If the list has 1 or fewer elements, it is already sorted.

Choose the middle element as the pivot.

Iterate through the list, partitioning elements into `$smaller`, `$equal`, and `$larger` lists based on their comparison with the pivot.

Recursively sort the `$smaller` and `$larger` lists and concatenate them with the `$equal` list to produce the sorted result.

Sass supports features like custom functions, `@for` loops, and `@each` loops, making it possible to implement sorting algorithms directly in Sass. By using these features, you can perform operations like sorting strings based on ASCII values, which is not natively supported in CSS.

































