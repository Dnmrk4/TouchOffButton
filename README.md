# Next.js Mobile Torch App

This is a mobile application built with Next.js that allows users to control the device's torch (flashlight) functionality. The application features a button that toggles the torch on and off, with a timeout mechanism to automatically hide the button after a period of inactivity.

## Features

- Toggle the torch on and off with a button.
- The button appears on the side of the screen when the torch is activated.
- If the button is pressed again within 10 seconds, the torch will toggle back on.
- If not pressed within 10 seconds, the button will slide back to the side of the screen.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd nextjs-mobile-torch-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Press the button to turn on the torch.
- Press the button again within 10 seconds to turn the torch off and back on.
- If the button is not pressed within 10 seconds, it will automatically slide back to the side of the screen.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.