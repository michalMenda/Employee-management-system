# Employee Management System

מערכת ניהול עובדים מלאה הבנויה עם React ו-NestJS.

## תיאור הפרויקט

מערכת ניהול עובדים המאפשרת:
- הצגת רשימת עובדים
- הוספת עובדים חדשים
- עדכון פרטי עובדים
- מחיקת עובדים
- ניהול סטטוס פעילות עובדים

## טכנולוגיות

### Frontend (Client)
- **React 18** - ספריית UI
- **TypeScript** - שפת תכנות
- **Vite** - כלי בנייה ופיתוח
- **Chakra UI** - ספריית רכיבי UI
- **TanStack Query** - ניהול state ו-API calls
- **Axios** - HTTP client
- **Framer Motion** - אנימציות

### Backend (Server)
- **NestJS** - Node.js framework
- **TypeScript** - שפת תכנות
- **Prisma** - ORM
- **PostgreSQL** - מסד נתונים
- **Class Validator** - ולידציה
- **Class Transformer** - טרנספורמציה של נתונים

## מבנה הפרויקט

```
Employee-management-system/
├── Client/                 # React frontend
│   ├── src/
│   │   ├── components/     # רכיבי React
│   │   ├── style/         # קבצי CSS
│   │   └── ...
│   └── package.json
├── Server/                # NestJS backend
│   ├── src/
│   │   ├── workers/       # מודול עובדים
│   │   ├── database/      # הגדרות מסד נתונים
│   │   └── ...
│   ├── prisma/           # סכמת מסד נתונים
│   └── package.json
└── README.md
```

## התקנה והרצה

### דרישות מוקדמות
- Node.js (גרסה 18 ומעלה)
- PostgreSQL
- npm או yarn

### הגדרת הפרויקט

1. **שכפול הפרויקט:**
```bash
git clone <repository-url>
cd Employee-management-system
```

2. **התקנת תלויות:**

**Backend:**
```bash
cd Server
npm install
```

**Frontend:**
```bash
cd Client
npm install
```

3. **הגדרת מסד נתונים:**

צור קובץ `.env` בתיקיית Server:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/employee_db"
```

הרץ migrations:
```bash
cd Server
npx prisma migrate dev
```

4. **הרצת הפרויקט:**

**Backend (פורט 3000):**
```bash
cd Server
npm run start:dev
```

**Frontend (פורט 5173):**
```bash
cd Client
npm run dev
```

## API Endpoints

### עובדים (Workers)
- `GET /workers` - קבלת כל העובדים
- `POST /workers` - הוספת עובד חדש
- `GET /workers/:id` - קבלת עובד לפי ID
- `PUT /workers/:id` - עדכון עובד
- `DELETE /workers/:id` - מחיקת עובד

### מבנה נתוני עובד
```json
{
  "id": 1,
  "name": "שם העובד",
  "role": "תפקיד",
  "isActive": true
}
```

## פיתוח

### הרצה במצב פיתוח
```bash
# Backend
cd Server
npm run start:dev

# Frontend
cd Client
npm run dev
```

### בדיקות
```bash
# Backend tests
cd Server
npm run test

# E2E tests
npm run test:e2e
```

### בנייה לפרודקשן
```bash
# Backend
cd Server
npm run build

# Frontend
cd Client
npm run build
```

## תרומה לפרויקט

1. צור fork של הפרויקט
2. צור branch חדש (`git checkout -b feature/amazing-feature`)
3. בצע commit לשינויים (`git commit -m 'Add amazing feature'`)
4. דחף ל-branch (`git push origin feature/amazing-feature`)
5. פתח Pull Request

## רישיון

פרויקט זה הוא פרטי ולא מיועד לשימוש מסחרי.