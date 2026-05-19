
# Friend Request Toggle Feature
### Add Friend Feature with same button

A simple interactive friend request card built using **HTML**, **CSS**, and **JavaScript**.  
This feature simulates adding and removing a friend by dynamically updating the UI when the button is clicked.

---

## 🚀 Features

- Interactive **Add Friend / Unfriend** button
- Dynamic status change:
  - `Stranger` → `Friends`
  - `Friends` → `Stranger`
- Status color updates:
  - Red for Stranger
  - Green for Friends
- Clean and responsive card UI
- Beginner-friendly JavaScript DOM manipulation project

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**

---

## 📂 Project Structure

```bash
project-folder/
│
├── index.html
├── style.css
└── script.js
```

---

## 📸 Preview

The card contains:

- Profile image
- User name
- Friendship status
- Toggle button

When the user clicks the button:

| Before Click | After Click |
|--------------|-------------|
| Stranger ❌ | Friends ✅ |
| Red Status | Green Status |
| Add Friend | Unfriend |

---

## ⚙️ How It Works

### JavaScript Logic

A variable named `check` is used to track the friendship state.

```javascript
var check = 0
```

### When Button is Clicked

If `check == 0`:
- Status changes to `Friends`
- Text color becomes green
- Button text changes to `Unfriend`

Else:
- Status changes back to `Stranger`
- Text color becomes red
- Button text changes to `Add Friend`

---

## ▶️ How to Run

1. Download or clone the project
2. Open the folder in Visual Studio Code
3. Run the `index.html` file in browser

---

## 📚 Learning Concepts

This project helps in understanding:

- DOM Selection
- Event Listeners
- Dynamic Content Update
- Styling using JavaScript
- State Management using Variables

---

## 🔮 Future Improvements

Possible enhancements:

- Add smooth animations
- Use multiple profile cards
- Store friendship status using Local Storage
- Add real backend integration
- Add transition effects and hover animations

---

## 👨‍💻 Author

Made with JavaScript practice and DOM manipulation learning.