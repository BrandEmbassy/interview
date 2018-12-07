export const onAddNewContactClicked = () => ({
  type: "SHOW_CREATE_MODAL"
});

export const onContactClick = contact => ({
  type: "SHOW_DETAIL_MODAL",
  editable: false,
  contact
});
