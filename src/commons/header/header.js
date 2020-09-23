import $ from 'jquery';

const header = {
  settings: {
    target: '.header',
    menuBtn: '.mobileNav__menuIcon',
    closeBtn: '.mobileNav__closeButton',
    menuContent: '.mobileNav__container'
  },

  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if (this.settings.target.length > 0) {
      this.catchDOM(this.settings, this.afterInit.bind(this));
    }
  },

  catchDOM(settings, callback) {
    const target = $(settings.target);

    this.$target = {
      root: target,
      menuBtn: target.find(settings.menuBtn),
      closeBtn: target.find(settings.closeBtn),
      menuContent: target.find(settings.menuContent)
    };

    callback();
  },

  afterInit() {
    this.bindEvents();
    this.initHideNav();
  },

  bindEvents() {
    this.$target.menuBtn.on('click', this.slideDownNav.bind(this));
    this.$target.closeBtn.on('click', () => this.slideUpNav());

    $(document).on('click', event => this.slideUpNav(event));
    $(this.$target.menuContent).on('click', event => {
      event.stopPropagation();
    });
  },

  initHideNav() {
    $(this.$target.menuContent).hide();
  },

  slideDownNav(event) {
    event.stopPropagation();
    $('#blurredOverlay').css('visibility', 'visible');
    $(this.$target.menuContent).slideDown(300);
  },

  slideUpNav() {
    $('#blurredOverlay').css('visibility', 'hidden');
    $(this.$target.menuContent).slideUp(200);
  }
};

export default header;
