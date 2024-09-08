((globalThis)=>{
       const core=Deno.core;

       function argsToMessage(...args) {
        return args.map((arg)=>JSON.stringify(arg)).join(" ");
       }

       globalThis.console={
        log: (...args)=>{
            core.print(`[out]:${argsToMessage(...args)}\n`,false);
        },
        sarcasm: (...args)=>{
            const message=argsToMessage(...args)+" "+"Wohoo!you did it your Highness"
            const logMessage=`[message]:${message}`;   
            core.print('${logMessage}\n',true);
    },
       }
})(globalThis);