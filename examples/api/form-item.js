const apis = [
  {
    name: 'Props',
    descKey: 'app.api.title.props',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'field',
        descKey: 'app.api.formItem.desc.field',
        version: '',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'title',
        descKey: 'app.api.formItem.desc.title',
        version: '',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'span',
        descKey: 'app.api.formItem.desc.span',
        version: '',
        type: 'String, Number',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'title-align',
        descKey: 'app.api.formItem.desc.titleAlign',
        version: '',
        type: 'String',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'title-width',
        descKey: 'app.api.formItem.desc.titleWidth',
        version: '',
        type: 'String, Number',
        enum: '',
        defVal: '',
        list: []
      },
      {
        name: 'item-render',
        descKey: 'app.api.formItem.desc.itemRender',
        version: '',
        type: 'Object',
        enum: '',
        defVal: '',
        list: [
          {
            name: 'name',
            desc: '渲染器名称',
            version: '',
            type: 'String',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'props',
            desc: '渲染的参数（请查看目标渲染的 Props）',
            version: '',
            type: 'Object',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'attrs',
            desc: '渲染的属性（请查看目标渲染的 Attribute）',
            version: '',
            type: 'Object',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'options',
            desc: '只对 name=select 有效，下拉选项列表',
            version: '',
            type: 'Array',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'optionProps',
            desc: '只对 name=select 有效，下拉选项属性参数配置',
            version: '',
            type: 'Object',
            enum: '',
            defVal: '{ value, label, disabled }',
            list: []
          },
          {
            name: 'optionGroups',
            desc: '只对 name=select 有效，下拉分组选项列表',
            version: '',
            type: 'Array',
            enum: '',
            defVal: '',
            list: []
          },
          {
            name: 'optionGroupProps',
            desc: '只对 name=select 有效，下拉分组选项属性参数配置',
            version: '',
            type: 'Object',
            enum: '',
            defVal: '{ options, label }',
            list: []
          },
          {
            name: 'events',
            desc: '渲染组件的事件（请查看目标渲染的 Events）',
            version: '',
            type: 'Object',
            enum: '',
            defVal: '{data, property}, ...[目标渲染的 arguments]',
            list: []
          }
        ]
      }
    ]
  },
  {
    name: 'Slots',
    descKey: 'app.api.title.slots',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: [
      {
        name: 'default',
        desc: '自定义表单项',
        version: '',
        type: '',
        enum: '',
        defVal: '',
        list: []
      }
    ]
  },
  {
    name: 'Events',
    descKey: 'app.api.title.events',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: []
  },
  {
    name: 'Methods',
    descKey: 'app.api.title.methods',
    version: '',
    type: '',
    enum: '',
    defVal: '',
    list: []
  }
]

export default apis
