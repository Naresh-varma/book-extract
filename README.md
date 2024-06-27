# Book Extracts from Pan Macmillan

This mobile-responsive React application, titled "Book Extracts from Pan Macmillan," displays a list of books in an interactive tabular view.

## Features

- **header**: Shows the header with title "Book Extracts from Pan Macmillan"
- **Library store**: Builds a global store using redux toolkit that stores books data fetched from API.
- **Body**: Displays books in a tabular format, with columns Cover, Author, Biography, Title, Reading time, Publication
- **Sortable Table**: Allows sorting by Author, Title, Reading Time, and Publication Date in ascending, descending with initial values rendered in default order.
- **Responsive Design**: The page is designed to be mobile-friendly and visually appealing with handcrafted CSS.
- **Footer**: Displays the author's name with a link to their linkedIn and GitHub account.

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/Naresh-varma/book-extract.git
   cd book-extract
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Start the development server**:

   ```sh
   npm start
   ```

4. **Build for production**:
   ```sh
   npm run build
   ```

## Usage

After starting the development server, navigate to `http://localhost:3002`.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **@reduxjs/toolkit**: Popular state management library used for reliable state updates.
- **react-redux**: React module which helps integrating the redux state management library.
- **react-loader-spinner**: Spinner module used to enchance user experience while data is loading from REST API.
- **DOMPurify**: Libaray used form sanitizing the HTML tags.

## API

The application fetches books from the following API:
https://extracts.panmacmillan.com/getextracts?titlecontains=s

Fields used from the API response:

- `jacketUrl`: URL of the book cover image.
- `author`: Author of the book.
- `authorBiography`: Biography of the author.
- `title`: Title of the book.
- `estimatedReadingTimeMinutes`: Estimated reading time in minutes.
- `publicationDate`: Publication date of the book.
- `isbn`: ISBN of the book.
