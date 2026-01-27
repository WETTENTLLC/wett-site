# WETT Girls Application Testing Checklist

## Prerequisites
- [ ] Database is running and configured (DATABASE_URL env variable set)
- [ ] All dependencies installed (`npm install`)
- [ ] Development server running (`npm run dev`)
- [ ] bcryptjs installed (already in package.json)

## Step 1: Create User Account via Admin Dashboard

### Navigate to Admin Dashboard
1. [ ] Go to `http://localhost:3000/admin`
2. [ ] Click "**+ Create New User**"

### Fill in Applicant Details
3. [ ] Enter **Full Name**: [From Formspree submission]
4. [ ] Enter **Email**: [From Formspree submission]
5. [ ] Click "**Create Account**"

### Save Generated Credentials
6. [ ] **IMPORTANT:** Copy the generated password from the alert popup
7. [ ] Email format example:
   ```
   Email: applicant@email.com
   Password: Xy9$mK2pL#4q
   ```

---

## Step 2: Test Login with Generated Password

### User Login
8. [ ] Go to `http://localhost:3000/login`
9. [ ] Enter the email address
10. [ ] Paste the generated password (exactly as shown)
11. [ ] Click "**Sign In**"

### Verify Success
12. [ ] User should be redirected to `/dashboard`
13. [ ] Welcome message shows user's name
14. [ ] No error messages appear

**❌ If login fails:**
- Check DATABASE_URL is set correctly
- Verify bcryptjs is installed
- Check browser console for errors
- Verify user was created in database

---

## Step 3: Test Password Change

### Navigate to Profile
15. [ ] Go to `http://localhost:3000/profile` (or click Profile link)
16. [ ] Click "**Change Password**" button

### Change Password
17. [ ] Enter **Current Password**: [The generated password]
18. [ ] Enter **New Password**: [Your chosen password, min 8 characters]
19. [ ] Enter **Confirm New Password**: [Same as new password]
20. [ ] Click "**Update Password**"

### Verify Success
21. [ ] Success message appears: "✅ Password changed successfully!"
22. [ ] Form closes after 2 seconds
23. [ ] No error messages

**❌ If password change fails:**
- Ensure current password matches generated password
- New password must be 8+ characters
- Both new password fields must match

---

## Step 4: Test Login with New Password

### Logout and Login Again
24. [ ] Log out of the account
25. [ ] Go to `/login`
26. [ ] Enter email address
27. [ ] Enter **NEW password** (not generated one)
28. [ ] Click "Sign In"

### Verify Success
29. [ ] Login successful with new password
30. [ ] Redirected to dashboard
31. [ ] **Generated password no longer works** (security check)

---

## Step 5: Verify Course Access - The WETT Doctrine

### Check Enrollment
32. [ ] User should be automatically enrolled in "The WETT Doctrine"
33. [ ] Go to `http://localhost:3000/blueprint/the-wett-doctrine`

### Course Content Available
34. [ ] Page loads without errors
35. [ ] All 6 core principles visible:
   - Group Economics
   - Loyalty is Royalty
   - Purse First, Ass Last
   - Polygyny as Structure
   - The Village Approach
   - Evolution Over Stagnation
36. [ ] "The WETT Way" section visible
37. [ ] "Mark Complete" button appears at bottom

---

## Step 6: Test Course Completion

### Complete The WETT Doctrine
38. [ ] Scroll through all content
39. [ ] Click "**Mark Complete & Continue to Etiquette School**"

### Verify Completion
40. [ ] Completion message appears: "🎉 Course Completed!"
41. [ ] Auto-redirect to Etiquette School after 3 seconds
42. [ ] Course marked as complete in localStorage/database

### Return to Check Status
43. [ ] Go back to `/blueprint/the-wett-doctrine`
44. [ ] Should show "✅ Course Completed!" badge
45. [ ] Button now says "Continue to Etiquette School →"

---

## Step 7: Verify Onboarding Progress

### Check Onboarding Page
46. [ ] Go to `/family/wett-girls-collective/onboarding`
47. [ ] Progress bar shows **50%** (Step 2 of 4)
48. [ ] Step 1 (Application) marked complete
49. [ ] Step 2 (WETT Doctrine) marked complete or current
50. [ ] Step 3 (Etiquette School) shows as next step
51. [ ] Step 4 (Full Membership) locked

---

## Step 8: Complete Etiquette School

### Access Etiquette School
52. [ ] Go to `/blueprint/etiquette-school`
53. [ ] Verify access is granted (unlocked after Doctrine)
54. [ ] All 6 lessons visible

### Complete All Lessons
55. [ ] Mark all 6 lessons complete
56. [ ] Progress should reach 100%
57. [ ] Full membership should activate

---

## Expected Email to Send

Use the template in `EMAIL_TEMPLATE_WETT_GIRLS.md`:

### Replace These Values:
- `[NAME]` → Applicant's full name
- `[EMAIL]` → Applicant's email
- `[PASSWORD]` → Generated password from admin dashboard

### Send Email To:
- Applicant's email address from Formspree

---

## Troubleshooting

### Login Issues
- **"Invalid email or password"**
  → Check password was copied exactly (no extra spaces)
  → Verify user exists in database
  → Check DATABASE_URL environment variable

### Password Change Issues
- **"Current password is incorrect"**
  → Use the generated password, not a new one
  → Check for typos

### Course Access Issues
- **"403 Forbidden" or "Access Denied"**
  → Verify user was enrolled in course via admin approve
  → Check course_enrollments table in database

### API Errors
- **500 Internal Server Error**
  → Check server console for detailed errors
  → Verify database connection
  → Ensure bcryptjs is installed

---

## Success Criteria ✅

All of the following should work:
1. ✅ User created with generated password
2. ✅ Login works with generated password
3. ✅ Password can be changed successfully
4. ✅ Login works with new password
5. ✅ Old password no longer works
6. ✅ The WETT Doctrine course is accessible
7. ✅ Course can be marked complete
8. ✅ Progress tracking updates correctly
9. ✅ Etiquette School unlocks after Doctrine completion

---

## Database Check Commands (Optional)

If you have database access:

```sql
-- Check if user was created
SELECT * FROM users WHERE email = 'applicant@email.com';

-- Check course enrollment
SELECT * FROM course_enrollments WHERE user_id = [USER_ID];

-- Check application status
SELECT * FROM applications WHERE email = 'applicant@email.com';
```

---

## Next Steps After Testing

Once all tests pass:
1. Send welcome email to applicant using template
2. Monitor their progress on onboarding page
3. Be available for questions at wettentertainmentllc@gmail.com
4. Check back when they complete Etiquette School to celebrate! 🎉
