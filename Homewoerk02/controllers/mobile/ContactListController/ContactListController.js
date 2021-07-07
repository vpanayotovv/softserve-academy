define({
    segDataList: [
      {name: "Bruce Banner",
       phone: "0888010203",
       email: "email@gmail.com",
       src: "konymp_fb_user_image1_small.png",
       arrow:"chevron_5.png",
       dateAdded: "25/06/2021"},
      {name: "James Haris",
       phone: "0888040253",
       email: "email1@gmail.com",
       src: "konymp_fb_user_image5_small.png",
       arrow:"chevron_5.png",
       dateAdded: "25/06/2021"},
      {name: "Jennifer Miller",
       phone: "0888041234",
       email: "email2@gmail.com",
       src: "konymp_fb_user_image2_small.png",
       arrow:"chevron_5.png",
       dateAdded: "25/06/2021"},
      {name: "Elizabeth James",
       phone: "0878043456",
       email: "email3@gmail.com",
       src: "konymp_fb_user_image4_small.png",
       arrow:"chevron_5.png",
       dateAdded: "25/06/2021"},
      {name: "Richard Gear",
       phone: "0878043456",
       email: "email4@gmail.com",
       src: "konymp_fb_user_image1_small.png",
       arrow:"chevron_5.png",
       dateAdded: "25/06/2021"},
      {name: "Anthony Joshua",
       phone: "0878043456",
       email: "email5@gmail.com",
       src: "konymp_fb_user_image3_small.png",
       arrow:"chevron_5.png",
       dateAdded: "25/06/2021"},
      {name: "Margaret Rose",
       phone: "0878043456",
       email: "email6@gmail.com",
       src: "konymp_fb_user_image4_small.png",
       arrow:"chevron_5.png",
       dateAdded: "25/06/2021"},
    ],
    
    formatedData: [],
    
    onViewCreated: function() {
      this.view.init = this.init;
      this.view.preShow = this.preShow;
    },
    
    init: function() {
      this.formatedSegmentData.call(this,this.segDataList,this.formatedData);
      this.view.segListContainer.segList.onRowClick = this.onRowClicked;
    },
    
    preShow: function() {
      this.view.segListContainer.segList.setData(this.formatedData);
    },
    
    formatedSegmentData: function(responseData,fomratedData) {
      var scope = this;
      responseData.forEach(function(contact) {
        fomratedData.push({
          "lblHeading": {"text": contact.name},
          "lblDescription": {"text": contact.phone},
          "imgProfile":{"src": contact.src},
          "imgArrow":{"src": contact.arrow},
          "lblTime": {"text": contact.dateAdded},
          "lblStrip": {"width": "0%"}
        });
      });
    },
  
  	onRowClicked: function() {
    var indexOfSelectedRow = this.view.segListContainer.segList.selectedRowIndex[1];
    var contactData = this.segDataList[indexOfSelectedRow];
    kony.store.setItem("contactDetails", contactData);
    var ntf = new kony.mvc.Navigation("ContactPage");
    ntf.navigate();
  },
  
});