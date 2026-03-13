# **Rule of the Month**: Output should exactly match the Definition of Done. So, map the Output with DOD.

# **Complete your Task by Sunday (15/03/2026) 4:00PM**.

## **If not you have to Redesign the LinkedIn Header to make it Responsive for all Devices in 2 Hours.**

## **Programming Languages used for the Task:** HTML, CSS & JS.

## **Page Details**:
### Name: journey-form.html
### Styles: journey-form.css
### Script: journey-form.js

## **Definition of Done:**
1. Followed the order of form fields correctly with labels, input field types and Styles.
2. After submission, data should be stored in the array by following the structure of object below.
3. After submission, all the input field's entered values should be removed in the input fields.
4. Don't load the page after submission but display a Popup after form submission.
5. Use the Colour's Variables which are mentioned in the styles/global.css.


## **Page Structure & Simple Styles**:
1. No Header needed
2. Form Fields with Labels(Color: LinkedIn Blue Variable):
    1. Role (Text Field)
    2. Period of Experience (Select - Drop Down)
    - Select Period of Experience (Default)
    - After Day 1
    - After 1 Month
    - After 1 Year
    3. Share your Experience (Text Area)
    4. Concepts you Prepared (Text Area)
    5. Provide some Model Questions (Text Area)
    6. Submit Button (Styles: Your Wish but use the color variables)<br>
    **Styles for Form:** Border(1px) (Colour: Border grey variable colour in styles/global.css), Border Radius - 8px.<br>
    **Styles for Input Fiels:** Focus - Black Border(1px), Unfocus - Border(1px) (Colour: Border grey variable colour in styles/global.css).<br>
3. Popup (Display only when Form submitted and data is stored in Object):
    - img: Success Icon
    - Heading(h3) - Your Experience Submitted Successfully. (Color: LinkedIn Blue Variable)
    - Done (Button) - Popup should closed when it is clicked.<br>
    **Styles for Popup:** Border(1px) (Colour: Border grey variable colour in styles/global.css), Border Radius - 8px.<br>

## **Object Structure**:
- Store the each Object in the Array of Objects.<br>
{<br>
    role,<br>
    period,<br>
    experience,<br>
    concepts,<br>
    modelQuestions<br>
}<br>

## **Do's & Don'ts:**
1. Don't Forget to map the Output with DOD after Completion of Task.
2. Do Make the Form and Popup responsive for all devices. Learn first & Try out.
3. Do Use only Class Attributes for naming the elements and write meaningful Class names in kebab-case.