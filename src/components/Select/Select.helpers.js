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
  
  const tempSelect = document.createElement('select');
  tempSelect.style.display = 'block';
  tempSelect.style.position = 'absolute';
  tempSelect.style.top = '0';
  tempSelect.style.left = '-9999px';
  tempSelect.style.visibility = 'hidden';
  tempSelect.style.paddingLeft = '12px';
  tempSelect.style.paddingRight = '24px';
  tempSelect.style.boxSizing = 'border-box';
  tempSelect.style.fontFamily = 'Roboto';
  tempSelect.style.fontSize = `${16 / 16}rem`;
  
  const tempOption = document.createElement('option');
  tempOption.textContent = optionText;
  
  tempSelect.append(tempOption);
  
  document.body.append(tempSelect);
  
  const selectWidth = tempSelect.getBoundingClientRect().width;

  tempSelect.remove(); 
  
  return selectWidth;
}
