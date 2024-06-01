# SASS & SCSS

## Learning Objectives

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

















