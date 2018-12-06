export const onAddNewContactClicked = () => ({
  type: "SHOW_CREATE_MODAL"
});
export const onContactClick = contactId => ({
  type: "SHOW_DETAIL_MODAL",
  editable: false,
  contactId
});
