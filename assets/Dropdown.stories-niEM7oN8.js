import{b as c,j as t,F as u,c as m,B as x}from"./FutureHouseApp-359dea_0.js";import{r as h}from"./index-CsdIBAqE.js";import"./index-MS7LKRHD.js";import"./inheritsLoose-BoPYmsJh.js";import"./index-5f0m1pej.js";const j={title:"Future House/Dropdown",component:c},w=n=>{const[d,s]=h.useState(n.label),l=e=>{s(e)};return t.jsxs(u,{children:[t.jsx(c,{label:d,children:n.options.map((e,i)=>t.jsx(m,{onClick:()=>l(e),children:e},`${e}-${i}`))}),t.jsx(x,{mg:4,onClick:()=>s(),children:"reset"})]})},o=w.bind({});o.args={options:["Option 1","Option 2","Option 3"],label:"No Selected Value"};var r,a,p;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState(args.label);
  const handleChange = option => {
    setSelected(option);
  };
  return <FutureHouseApp>
            <Dropdown label={selected}>
                {args.options.map((item, index) => <DropdownItem key={\`\${item}-\${index}\`} onClick={() => handleChange(item)}>
                        {item}
                    </DropdownItem>)}
            </Dropdown>
            <Button mg={4} onClick={() => setSelected()}>
                reset
            </Button>
        </FutureHouseApp>;
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const B=["BasicDropdown"];export{o as BasicDropdown,B as __namedExportsOrder,j as default};
