import React from 'react';

export function getDisplayedValue(value, children) {
  const childArray = React.Children.toArray(children);
  const selectedChild = childArray.find(
    (child) => child.props.value === value
  );

  return selectedChild.props.children;
}

export function getSelectedOption(value, children) {
  const childArray = React.Children.toArray(children);
  return childArray.find((child) => child.props.value === value);
}

export function getSelectWidth(option) {
  const optionText = option.props.children;
  //
  // const tempSelect = document.createElement('select');
  // tempSelect.style.display = 'block';
  // tempSelect.style.position = 'absolute';
  // tempSelect.style.top = '0';
  // tempSelect.style.left = '-9999px';
  // tempSelect.style.visibility = 'hidden';
  // tempSelect.style.paddingLeft = '16px';
  // tempSelect.style.paddingRight = '52px';
  // tempSelect.style.boxSizing = 'border-box';
  // tempSelect.style.fontFamily = "'Roboto', sans-serif";
  // tempSelect.style.fontSize = `${16 / 16}rem`;
  // tempSelect.style.appearance = 'none'; 
  //
  // const tempOption = document.createElement('option');
  // tempOption.textContent = optionText;
  //
  // tempSelect.append(tempOption);
  //
  // document.body.append(tempSelect);
  //
  // const selectWidth = tempSelect.getBoundingClientRect().width;
  //
  // tempSelect.remove(); 
  const tempElement = document.createElement('span');
  tempElement.style.display = 'block';
  tempElement.style.position = 'absolute';
  tempElement.style.top = '0';
  tempElement.style.left = '-9999px';
  tempElement.style.visibility = 'hidden';
  tempElement.style.paddingLeft = '16px';
  tempElement.style.paddingRight = '52px';
  tempElement.style.boxSizing = 'border-box';
  tempElement.style.fontFamily = "'Roboto', sans-serif";
  tempElement.style.fontSize = `${16 / 16}rem`;
  tempElement.style.border = "1px solid";
  tempElement.style.width = 'fit-content';
  
  tempElement.textContent = optionText;
  
  document.body.append(tempElement);
  
  const selectWidth = tempElement.getBoundingClientRect().width;
  
  tempElement.remove();
  
  return selectWidth;
}
