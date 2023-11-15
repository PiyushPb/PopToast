# PopToast

PopToast is a lightweight JavaScript library for creating customizable and stylish toast notifications.

## Quick Start

Include the following links in your HTML file:

```html
<!-- Add the PopToast styling to head -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/PiyushPb/PopToast/src/style.css" />
```

```html
<!-- Add the PopToast script in body -->
<script src="https://cdn.jsdelivr.net/gh/PiyushPb/PopToast/src/index.js"></script>
```

To display a toast notification, call the popToast function:
```javascript
popToast("This is a toast message!", "info");
```
Output:

You can customize the message and choose from different types of toasts: success, error, warning, and info.

## Styling
PopToast comes with default styles, but you can easily customize the look by modifying the CSS variables. Include the following CSS variables in your stylesheet:

```css
:root {
  --dark-bg: #34495e;
  --light-bg: #ffffff;
  --success-bg: #0abf30;
  --error-bg: #e24d4c;
  --warning-bg: #e9bd0c;
  --info-bg: #3498db;
}
```

## Example
Here's an example of how to use PopToast:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PopToast Example</title>

  <!-- Add the PopToast styling -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/PiyushPb/PopToast/src/style.css" />
</head>
<body>

  <!-- Add the PopToast script -->
  <script src="https://cdn.jsdelivr.net/gh/PiyushPb/PopToast/src/index.js"></script>

  <script>
    // Display an info toast
    popToast("This is a toast message!", "info");
  </script>
</body>
</html>
```

## Contributing

PopToast welcomes contributions from the community. If you'd like to contribute, please follow these guidelines:

- **How to Contribute:**
  1. Fork the repository to your GitHub account.
  2. Clone the forked repository to your local machine:

     ```bash
     git clone https://github.com/your-username/PopToast.git
     ```

  3. Create a new branch for your feature or bug fix:

     ```bash
     git checkout -b feature-name
     ```

  4. Make your changes and test thoroughly.
  5. Commit your changes:

     ```bash
     git commit -m "Description of your changes"
     ```

  6. Push your changes to your fork:

     ```bash
     git push origin feature-name
     ```

  7. Create a Pull Request (PR) from your forked repository to the main PopToast repository on GitHub.

- **Contribution Guidelines:**
  - Follow the existing code style and structure.
  - Ensure that your changes do not break existing functionality.
  - Provide clear and detailed descriptions of your changes in your commit messages and PR.
  - Test your changes thoroughly before submitting a PR.
  - Ensure that your branch is up-to-date with the main branch before creating a PR.
  - For major changes, discuss them in an issue before implementing.


Make sure to replace `your-username` and `feature-name` with your GitHub username and the name of your feature branch, respectively. These guidelines help maintain a clean and organized codebase, making it easier for everyone to collaborate.

By contributing to PopToast, you agree that your contributions will be licensed under the [MIT License](LICENSE.md).

Thank you for contributing to PopToast!

## License

Make sure to update the [README](README.md) if there are additional configurations or features users need to be aware of.

