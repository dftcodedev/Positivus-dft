const c5 = new Proxy({"src":"/_astro/card-pic5.CqK5dBMJ.png","width":210,"height":196,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/tmp/cc-agent/60266810/project/src/assets/pics/card-pic5.png";
							}
							
							return target[name];
						}
					});

export { c5 as c };
