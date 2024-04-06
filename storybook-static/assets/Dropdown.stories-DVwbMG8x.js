import{b as u,j as o,F as d,B as i}from"./FutureHouseApp-BsnQ-ZHP.js";import{r as m}from"./index-CsdIBAqE.js";import"./index-MS7LKRHD.js";import"./inheritsLoose-BoPYmsJh.js";import"./index-5f0m1pej.js";const L={title:"Future House/Dropdown",component:u,argTypes:{defaultLabel:"Some defaultLabel"}},b=a=>{const[t,s]=m.useState(),p=c=>{s(c)};return o.jsxs(d,{children:[o.jsx(u,{...a,callback:p,defaultLabel:(t==null?void 0:t.label)??a.defaultLabel}),o.jsx(i,{mg:4,onClick:()=>s(),children:"reset"})]})},e=b.bind({});e.args={options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],defaultLabel:"No Selected Value"};var n,r,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState();
  const handleChange = option => {
    setSelected(option);
  };
  return <FutureHouseApp>
            <Dropdown {...args} callback={handleChange} defaultLabel={selected?.label ?? args.defaultLabel} />
            <Button mg={4} onClick={() => setSelected()}>
                reset
            </Button>
        </FutureHouseApp>;
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const w=["BasicDropdown"];export{e as BasicDropdown,w as __namedExportsOrder,L as default};
