define({ 

  onViewCreated: function() {
    this.view.init = this.init;
    this.view.preShow = this.preShow;
  },

  init: function() {
    this.view.ContactsContainer.onClick = this.clicked;
    this.view.PhoneFlexContainer.
  },

  preShow: function() {
    var contact = kony.store.getItem("contactDetails");
    this.view.ContactTextFlexContainer.NameLbl.text = contact.name;
    this.view.ContactImgFlxContainer.ContactImg.src = contact.src;
    this.view.PhoneFlexContainer.txtPhoneRounded.text = contact.phone;
    this.view.EmailFlexContainer.EmailBox.text = contact.email;
  },

  clicked: function(){
    var ntf = new kony.mvc.Navigation("ContactList");
    ntf.navigate();
  }

});