const c1 = new Proxy({"src":"/_astro/card-pic1.LmmlwL7_.png","width":210,"height":170,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/tmp/cc-agent/60266810/project/src/assets/pics/card-pic1.png";
							}
							
							return target[name];
						}
					});

export { c1 as c };
