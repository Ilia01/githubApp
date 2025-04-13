# README.md for GitHub Search App

# GitHub Search App

This is a fullstack application that allows users to search through GitHub repositories and user profiles. Users can add repositories to their favorites and view them within the app. Additionally, the app features an avatar creation tool inspired by Avataaars, allowing users to customize their own avatars.

## Features

- Search for GitHub repositories and users
- Add repositories to your favorites
- View detailed information about repositories
- Create and customize user avatars

## Technologies Used

- **Backend**: Django
- **Frontend**: JavaScript, HTML, CSS
- **Database**: SQLite (or any other database of your choice)

## Project Structure

```
github-search-app
├── backend
│   ├── core
│   ├── apps
│   └── manage.py
├── frontend
│   ├── src
│   ├── templates
│   └── static
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Ilia01/githubApp.git
   ```

2. Navigate to the backend directory and install the required packages:
   ```
   cd backend
   pip install -r requirements.txt
   ```

3. Run the migrations:
   ```
   python manage.py migrate
   ```

4. Start the Django server:
   ```
   python manage.py runserver
   ```

5. Navigate to the frontend directory and start the frontend application.

## Usage

- Access the application through your web browser at `http://localhost:8000`.
- Use the search feature to find repositories and users on GitHub.
- Customize your avatar and save your preferences.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you'd like to add.

## License

This project is licensed under the MIT License. See the LICENSE file for details.