# 🧪 Cypress E2E Tests - ShopEase (E-commerce)

This project automates front-end tests using **Cypress** for a fictional e-commerce website called **ShopEase**. It simulates real user behavior and validates the store's key functionalities, ensuring robustness and application quality.

<p align="center">
  <img src="https://github.com/user-attachments/assets/714e9b9f-ec3b-4494-a95c-fac3c2c49c35" alt="cypress" width="400" />
</p>

---

## 🚀 Technologies Used

- [Cypress](https://www.cypress.io/) — E2E testing framework  
- [Faker.js](https://github.com/faker-js/faker) — Fake data generator  
- GitHub Actions — Continuous Integration (CI)

---

## 📂 Test Structure
```yaml
    cypress/
    ├── fixtures/
    │ └── products.json # Mock data for product tests
    ├── integration/
    │ ├── auth/
    │ │ ├── login.spec.js
    │ │ ├── negative-login.spec.js
    │ │ └── register-dynamic.spec.js
    │ ├── cart/
    │ │ └── cart.spec.js
    │ ├── checkout/
    │ │ └── checkout.spec.js
    │ ├── home/
    │ │ └── home.spec.js
    │ └── products/
    │ └── search.spec.js
    ├── support/
    │ ├── commands.js
    │ └── index.js # Includes screenshot capture on failure
```


## ✅ Tested Features

| Feature                 | Included Tests                                |
|------------------------|-----------------------------------------------|
| 🔐 Login               | Valid and invalid login scenarios             |
| 🧾 Registration        | Dynamic user registration with Faker.js       |
| 🏠 Home                | Rendering and navigation                      |
| 🔍 Product Search      | Filtering, invalid search, mock data          |
| 🛒 Cart                | Add, remove, and update items                 |
| 💳 Checkout            | Full checkout process with valid data         |
| 🔄 Full flow           | From search to checkout confirmation          |
| ❌ Form Validation     | Required fields and invalid input handling    |

---

## 🧠 Key Features

- ✅ **Dynamic Test Data** using [Faker.js](https://github.com/faker-js/faker)
- ❌ **Negative Testing** (e.g. invalid login, empty form submission)
- 📸 **Automatic Screenshots** on test failure (configured in `support/index.js`)
- 🔧 **Mock Server Support** using `fixtures/products.json`
- 🤖 **CI Integration** via GitHub Actions

---

## 🧪 Running the Tests

### Install dependencies

```bash
npm install
```

#### Open Cypress in interactive mode
```bash
npx cypress open
```

#### Run tests in headless mode
``` bash
npx cypress run
```

## ⚙️ Continuous Integration (CI)
This project is configured with GitHub Actions to run tests automatically on:
- Pushes to the main branch
- Pull requests

CI workflow file: .github/workflows/cypress.yml

