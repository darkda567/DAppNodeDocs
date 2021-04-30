/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{
    type: 'category',
    label: 'Home',
    items: [
      {type: 'autogenerated', dirName: 'home'},]},
    {
      type: 'category',
      label: 'Versions Covered',
      items: [
        {type: 'autogenerated', dirName: 'versions'},
      ]
    },
    {
      type: 'category',
      label: 'Introduction',
      items: [
        {type: 'autogenerated', dirName: 'introduction'},
      ]
    },
    {
      type: 'category',
      label: 'Install',
      items: [
        {type: 'autogenerated', dirName: 'install'},
      ]
    },
    {
      type: 'category',
      label: 'Connect to DAppNode',
      items: [
        {type: 'autogenerated', dirName: 'connect'},
      ]
    },
    {
      type: 'category',
      label: 'What can you do with DAppNode?',
      items: [
        {type: 'autogenerated', dirName: 'whatCanYouDoWithDappnode'},
      ]
    },
    {
      type: 'category',
      label: 'User Guide',
      items: [
        {type: 'autogenerated', dirName: 'userGuide'},
      ]
    },
    {
      type: 'category',
      label: 'FAQs',
      items: [
        {type: 'autogenerated', dirName: 'faqs'},
      ]
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        {type: 'autogenerated', dirName: 'troubleshooting'},
      ]
    },
    {
      type: 'category',
      label: 'Migration to v0.2.0',
      items: [
        {type: 'autogenerated', dirName: 'migration'},
      ]
    },
    {
      type: 'category',
      label: 'Architecture',
      items: [
        {type: 'autogenerated', dirName: 'architecture'},
      ]
    },
    {
      type: 'category',
      label: 'DAppNode Package Manifest Reference',
      items: [
        {type: 'autogenerated', dirName: 'manifest'},
      ]
    },
    {
      type: 'category',
      label: 'DAppNode Package Seutp Wizard Reference',
      items: [
        {type: 'autogenerated', dirName: 'setupWizard'},
      ]
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        {type: 'autogenerated', dirName: 'contributing'},
      ]
    },
    {
      type: 'category',
      label: 'License',
      items: [
        {type: 'autogenerated', dirName: 'license'},
      ]
    }
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
