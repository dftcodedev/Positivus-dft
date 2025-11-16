const c3 = new Proxy({"src":"/_astro/card-pic3.D4d3JTsx.png","width":210,"height":210,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/tmp/cc-agent/60266810/project/src/assets/pics/card-pic3.png";
							}
							
							return target[name];
						}
					});

export { c3 as c };
