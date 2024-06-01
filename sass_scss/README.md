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


`0-debug_log.scss:2` indicates the file name (0-debug_log.scss) and the line number (2) where the `@debug` statement is located.

`DEBUG: Hello world` is the actual message output by the `@debug` statement in your Sass file.

The output confirms that the `@debug` directive in the Sass file is correctly printing the "Hello world" message to the debug output.

### Task 1 - Write a Sass file that assigns the text color #3D3D3D to the HTML tags body and p.

To test, input this command in your terminal:
```
sass 1-color_variable.scss | tail -n +2
```

![image](https://github.com/ThatsVie/atlas-web_front_end/assets/143755961/cf946a90-03de-4753-9192-b8a53ece0f02)

The command processes the SCSS file `1-color_variable.scss` to produce the corresponding CSS, then removes the first line of the output to give a view of the CSS code that styles the body and p tags with the color #3D3D3D.
