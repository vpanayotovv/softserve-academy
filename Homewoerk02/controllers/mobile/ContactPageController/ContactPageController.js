define({ 

  flag:true,

  onViewCreated: function() {
    this.view.init = this.init;
    this.view.preShow = this.preShow;
  },

  init: function() {
    this.view.ContactsContainer.onClick = this.clicked;
    this.view.SwitchTheme.onSlide = this.changeTheme;
    this.view.PhoneFlexContainer.setEnabled(false);
    this.view.EmailFlexContainer.setEnabled(false);
    this.view.NotesFlexContainer.setEnabled(false);
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
  },

  changeTheme: function(){
    function onsuccesscallback() {
      alert(`Successfully change Theme`);
    }

    function onerrorcallback() {
      alert("Skin does not exist");
    }

    if(this.flag){
      kony.theme.setCurrentTheme("DarkTheme", onsuccesscallback, onerrorcallback);
      this.flag = false;
    }else{
      kony.theme.setCurrentTheme("MyTheme", onsuccesscallback, onerrorcallback);
      this.flag = true;
    }
  },

});