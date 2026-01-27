# WETT Girls Workflow - Quick Reference

## 📋 When You Receive an Application

### Option A: Via Admin Dashboard (Automatic)
1. **Go to:** `http://localhost:3000/admin` (or your deployed URL)
2. **View:** Pending applications list
3. **Click:** "Approve" button next to applicant's name
4. **Copy:** Generated password from popup
5. **Send:** Welcome email using template below

### Option B: Manual Creation
1. **Go to:** `http://localhost:3000/admin`
2. **Click:** "+ Create New User"
3. **Fill in:** Name and email from Formspree submission
4. **Copy:** Generated password
5. **Send:** Welcome email

---

## 📧 Welcome Email Template

**Subject:** 🎉 Welcome to WETT Girls - Your Account is Ready!

---

Hi **[NAME]**,

Your WETT Girls application has been approved! 👑

### Login Credentials
- **Email:** [EMAIL]
- **Password:** [PASSWORD]
- **Login:** https://wettlifestyle.com/login

### Next Steps
1. **Login** with credentials above
2. **Change your password** in Profile
3. **Complete The WETT Doctrine** (unlocked now)
4. **Complete Etiquette School** (unlocks after Doctrine)
5. **Enjoy full membership** benefits!

Questions? Reply to this email.

Welcome to the sisterhood! 🌟

---

## 🔐 What Happens Automatically

When you approve an application:
1. ✅ User account created with secure password
2. ✅ Password hashed with bcrypt (cannot be reversed)
3. ✅ Enrolled in The WETT Doctrine course
4. ✅ Profile page access granted
5. ✅ Onboarding tracking started

---

## 📊 User Journey After Approval

### Step 1: First Login (Day 1)
- User receives email with temp password
- Logs in successfully
- Changes password in Profile

### Step 2: The WETT Doctrine (Week 1)
- Reads course content
- Clicks "Mark Complete"
- Auto-redirected to Etiquette School

### Step 3: Etiquette School (Week 2-3)
- Completes 6 lessons
- Progress tracked automatically
- Unlocks full membership

### Step 4: Full Membership (Ongoing)
- Access to all courses
- Community forums
- WETT TIDES currency
- Events and opportunities

---

## 🛠️ Admin Tools Available

### `/admin` Dashboard
- View pending applications
- Approve applications (auto-creates account)
- Manual user creation
- See application details

### User Management
- Each approval creates secure account
- 12-character random password with special chars
- Bcrypt hash (industry standard)
- Automatic course enrollment

---

## 📁 Files Created/Updated

### API Routes (All Working ✅)
- `/api/login` - User authentication
- `/api/create-user` - Manual account creation
- `/api/change-password` - Password updates
- `/api/admin/approve` - Approve & auto-create
- `/api/admin/applications` - List pending

### Pages Updated
- `/profile` - Added password change form
- `/blueprint/the-wett-doctrine` - Added completion tracking
- `/admin` - Already had user creation

### Documentation
- `EMAIL_TEMPLATE_WETT_GIRLS.md` - Full email template
- `WETT_GIRLS_TESTING_CHECKLIST.md` - Complete testing guide
- `WETT_GIRLS_WORKFLOW_GUIDE.md` - This file

---

## ✅ Pre-Flight Checklist

Before approving the first applicant:

1. [ ] Database connected (DATABASE_URL set)
2. [ ] Dev server running (`npm run dev`)
3. [ ] Can access `/admin` page
4. [ ] Email template ready
5. [ ] All API routes working

---

## 🔍 How to Verify Everything Works

### Quick Test (5 minutes)
1. Go to `/admin`
2. Create a test user with your email
3. Copy the generated password
4. Login at `/login`
5. Change password in `/profile`
6. Visit `/blueprint/the-wett-doctrine`
7. Mark course complete

### Full Test
See `WETT_GIRLS_TESTING_CHECKLIST.md` for comprehensive testing

---

## 🆘 Common Issues & Solutions

### "Invalid email or password"
- **Cause:** Password copied incorrectly
- **Fix:** Copy password exactly from admin dashboard (no spaces)

### "Failed to create user"
- **Cause:** Database not connected
- **Fix:** Check DATABASE_URL environment variable

### "User already exists"
- **Cause:** Email already in system
- **Fix:** User was already created, send them password reset link

### Password change not working
- **Cause:** Wrong current password
- **Fix:** Use the generated password sent in welcome email

---

## 📞 Support

If applicants have issues:
- **Email:** wettentertainmentllc@gmail.com
- **Response time:** Within 24 hours
- **Common questions:**
  - "I forgot my password" → Reset via email
  - "Can't access course" → Check completion of previous steps
  - "Login not working" → Verify email/password (case sensitive)

---

## 🎯 Success Metrics to Track

- Time from approval to first login
- Course completion rates
- Password change rate (security metric)
- Full membership activation rate
- Support ticket volume

---

## Generated Password Format

Example: `Xy9$mK2pL#4q`
- **Length:** 12 characters
- **Contains:** Letters (upper/lower), numbers, special chars
- **Security:** Industry standard, bcrypt hashed
- **One-time use:** User should change immediately

---

## Next Applicant Workflow

1. **Check Formspree** for new submission
2. **Go to `/admin`**
3. **Approve application**
4. **Copy password** from alert
5. **Send email** using template
6. **Monitor progress** on onboarding page
7. **Celebrate** when they complete! 🎉

---

*Last updated: January 26, 2026*
*System ready for production ✅*
