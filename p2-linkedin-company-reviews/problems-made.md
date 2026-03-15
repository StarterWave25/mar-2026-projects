Mistakes in Your Layout (List Only)
1. Fixed height percentages on layout containers

You used things like:

.company-profile { height: 65%; }

.overview-container { height: 32%; }

.promos-container { height: 32%; }

These depend on the parent height, which you didn’t control properly. This causes unpredictable layout behavior.

2. Using min-height: 120vh on .main-container
.main-container {
  min-height: 120vh;
}

This forces the page taller than the viewport and breaks natural content flow.

3. object-fit applied to a non-replaced element
.banner-section {
  object-fit: cover;
}

object-fit does nothing on divs.
It only works on images/videos.

4. Absolute positioning with percentage offsets that depend on unstable height
.profile-section {
  position: absolute;
  bottom: -50%;
}

This depends on container height which is not reliable.

5. width: fit-content used incorrectly on the logo
.profile-section img {
  width: fit-content;
}

This can cause inconsistent rendering across browsers and is unnecessary here.

6. Navigation width artificially limited
.navigation-section ul {
  width: 60%;
}

You’re hard-restricting the nav width, which breaks responsive alignment.

7. Flexbox used but not fully leveraged

Example:

.company-details {
  flex: 3 1 0;
}

Using flex-basis: 0 without proper reasoning often creates weird resizing behavior.

8. justify-content: space-between used where content height is not stable

Example:

.promotions-details {
  justify-content: space-between;
}

This depends heavily on fixed heights you already misused.

9. Using percentage heights inside containers that depend on content

Example:

.overview-container .description {
  height: 55%;
}

Text blocks should not depend on height percentages.

10. Image banner missing proper height control
.banner-section img {
  width: 100%;
}

Without height or aspect ratio control, this can collapse or stretch.

11. Over-nesting unnecessary containers

Example:

.company-details
   company-profile
      banner-section
         profile-section
            image-container

Some layers are unnecessary and complicate positioning.

12. gap mixed with percentage heights

Example:

.main-container {
  gap: 2em;
}

When children rely on percentage heights, gaps distort the intended ratios.

13. Mobile breakpoint too simplistic
@media (width <= 700px)

Real responsive layout usually needs at least 2-3 breakpoints, even when using clamp.

14. Clamp used on things that shouldn't scale

Example:

padding: clamp(1rem, .9vw, 3rem)

Some paddings should remain stable, not scale with viewport.

15. Banner/profile overlap technique is fragile

Your LinkedIn profile overlap depends on:

bottom: -50%
margin-top: 10%

This will break on certain screen heights.

16. Promotion cards height controlled by percentage
.promos-container {
  height: 32%;
}

Cards should grow by content, not by parent height percentage.