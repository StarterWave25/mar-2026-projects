# **Rule of the Month**: Output should exactly match the Definition of Done. So, map the Output with DOD.

# **Complete the Task by Tomorrow (07/03/2026) 6:00PM**.

## **If not you have to Write the Responsive Code for the Entire Project.**

## **Page Name:** edit-resume.html

## **Definition of Done:**
1. Followed the Page Structure exactly.
2. Resume Image Border Radius in Round Shape.
3. Resume Fields are Rendered with Data in JS.
4. Edit Button in Top Right Corner as in the image (img/edit-resume-structure).
5. 9 Divs in (.resume-templates-grid). Displayed 3 divs in each row and each div should have width 300px and height 400px.
6. Copy the header from index.html.
7. Include the styles/global.css and styles/header.css for Reusability of the styles.

## **Page Structure with Styling Instructions: (See the Design image in img/edit-resume-structure)**

### body > header(copy from index.html) (.resume-content-container) + (.resume-templates-container)

### **1. div (.resume-content-container) > ( h2 + div(.resume-contents) ):**
- h2: Your Resume Content (aligned to center)

#### div (.resume-contents) > div (.resume-img) + div (.resume-fields-container)

#### div (.resume-img) > img:
##### Image is present in img folder link it.
##### Image Border Radius should be in Round Shape.

#### div (.resume-fields-container):
- Full Name
- Tagline
- Place
- Summary
- Experience
- Education
- Contact
##### Each Field should be in a div(.resume-field) > ( span (Field Name) + p (Field Value) ).
##### Only these fields should be rendered through JavaScript. The Data will be in scripts/edit-resume.js file.

#### **Edit Button similar one in LinkedIn should be placed on top right corner like shown in the image.**



### **2. div(.resume-templates-container) > ( h2 + div (.resume-templates-grid) ):**
- h2: Best Resume Templates for you (aligned to center)

#### div(.resume-templates-grid):

##### 9 divs (.resume-template) > no childs. Apply any background color for them.
##### Each row should have exactly 3 templates.
##### Each template should have width 300px and height 400px.


## **Do's & Don'ts:**
### 1. You have freedom to experiment in the process of styling other than mentioned elements.
### 2. Use only colors which are present in styles/global.css folder.
### 3. Don't forget to map the Definition of Done with the Output.







