[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)

# React-modal-typescript-custom

A library to easily display and customize a modal.

## Technologies
- JS
- Sass
- React

## Authors

React-modal-typescript-custom is developed by Laetitia Hars

## Version

Version 0.1.0

## Installation

To install, you can use [npm](https://www.npmjs.com/)

```
$ npm install --save react-modal-typescript-custom
```

## Documentation

### General Usage

The only prop required is ```isShowing```, which is used to indicate whether the pop-up should be opened.
The following example describes how to open and close a modal, as well as all the possible options.

```
import Modal from 'react-modal-typescript-custom';
import "react-modal-typescript-custom/dist/index.css";

    <Modal
      isShowing={false}, /* Open modal if true */
      
      onRequestClose={afterCloseFunction}, /* Function to be executed when the modal is closed */
      
      title={null}, /* Text content for the modal title */ (null means no title)
      
      clickClose={true}, /* Allows the user to close the modal by clicking the overlay */
      
      escapeClose={true}, /* Allows the user to close the modal by pressing `ESC` */
      
      showClose={true}, /* Shows a (X) icon button in the top-right corner */
      
      closeText={"Close"}, /* Text content for the close <button> */
      
      closeClass={""}, /* Add additional class(es) to the close <button> tag */
      
      modalClass={""}, /* CSS class added to the element being displayed in the modal */
      
      overlayClass={""}, /* CSS class added to the overlay */
      
      fadeDuration={250}, /* Number of milliseconds the fade transition takes (0 means no transition) */
      >
        <div>Modal content</div>
      </Modal>
```
