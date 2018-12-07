export const closeModal = () => ({
  type: "CLOSE_MODAL"
});

export const editContactModal = contact => ({
  type: "SHOW_DETAIL_MODAL",
  editable: true,
  contact: contact
});
