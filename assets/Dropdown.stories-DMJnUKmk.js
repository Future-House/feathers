import{b as c,j as t,F as u,c as m,B as x}from"./FutureHouseApp-j0s6hASL.js";import{r as h}from"./index-CsdIBAqE.js";import"./index-MS7LKRHD.js";import"./inheritsLoose-BoPYmsJh.js";import"./index-5f0m1pej.js";const j={title:"Future House/Dropdown",component:c},w=n=>{const[i,s]=h.useState(n.label),d=e=>{s(e)};return t.jsxs(u,{children:[t.jsx(c,{label:i,children:n.options.map((e,l)=>t.jsx(m,{onClick:()=>d(e),children:e},`${e}-${l}`))}),t.jsx(x,{mg:4,onClick:()=>s(n.options[0]),children:"reset"})]})},o=w.bind({});o.args={options:["Option 1","Option 2","Option 3"],label:"No Selected Value"};var r,p,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`args => {
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
            <Button mg={4} onClick={() => setSelected(args.options[0])}>
                reset
            </Button>
        </FutureHouseApp>;
}`,...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const B=["BasicDropdown"];export{o as BasicDropdown,B as __namedExportsOrder,j as default};
