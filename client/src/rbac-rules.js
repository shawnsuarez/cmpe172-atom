const rules = {
  visitor: {
    static: [
      "home-page:visit"
    ]
  },
  employee: {
    static: [
      "home-page:visit",
      "dashboard-page:visit"
    ]
  },
  admin: {
    static: [
      "employee:list",
      "employee:create",
      "employee:edit",
      "employee:delete",
      "employee:get",
      "employee:getSelf",
      "home-page:visit",
      "dashboard-page:visit"
    ]
  }
};

export default rules;
