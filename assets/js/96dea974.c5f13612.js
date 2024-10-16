"use strict";(self.webpackChunkdanielrive_site=self.webpackChunkdanielrive_site||[]).push([[2328],{726:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=t(4848),o=t(8453);const a={slug:"eks-fluentbit",title:"Configuring Logging in AWS EKS Using Fluent Bit and CloudWatch",authors:["danielrivera"],tags:["aws","SmartCash-Project","kubernetes"]},i=void 0,r={permalink:"/blog/eks-fluentbit",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-10-11-Configuring-Logging-in-AWS-EKS-Using-Fluent-Bit-and-CloudWatch.md",source:"@site/blog/2024-10-11-Configuring-Logging-in-AWS-EKS-Using-Fluent-Bit-and-CloudWatch.md",title:"Configuring Logging in AWS EKS Using Fluent Bit and CloudWatch",description:"fluent-bit",date:"2024-10-11T00:00:00.000Z",tags:[{inline:!1,label:"AWS",permalink:"/blog/tags/aws",description:"Content related with AWS"},{inline:!0,label:"SmartCash-Project",permalink:"/blog/tags/smart-cash-project"},{inline:!1,label:"Kubernetes",permalink:"/blog/tags/kubernetes",description:"Content related with Kubernetes"}],readingTime:7.96,hasTruncateMarker:!0,authors:[{name:"Daniel German Rivera",title:"Cloud Engineer",url:"https://github.com/danielrive",page:{permalink:"/blog/authors/danielrivera"},socials:{github:"https://github.com/danielrive",linkedin:"https://www.linkedin.com/in/danielrive/"},key:"danielrivera"}],frontMatter:{slug:"eks-fluentbit",title:"Configuring Logging in AWS EKS Using Fluent Bit and CloudWatch",authors:["danielrivera"],tags:["aws","SmartCash-Project","kubernetes"]},unlisted:!1,nextItem:{title:"Using Terraform to push files to Git Repo for GitOps",permalink:"/blog/terraform-gitops"}},l={authorsImageUrls:[void 0]},c=[{value:"Project Source Code",id:"project-source-code",level:2},{value:"Option 1. Export logs directly to Cloudwatch Logs(No Cloudwatch add-on)",id:"option-1-export-logs-directly-to-cloudwatch-logsno-cloudwatch-add-on",level:2},{value:"Fluent-Bit installation",id:"fluent-bit-installation",level:3},{value:"Adding the Helm chart",id:"adding-the-helm-chart",level:4},{value:"Adding a filter",id:"adding-a-filter",level:4},{value:"Option 2. Use the amazon-cloudwatch-observability add-on",id:"option-2-use-the-amazon-cloudwatch-observability-add-on",level:2},{value:"Bonus: Cluster dashboard",id:"bonus-cluster-dashboard",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"fluent-bit",src:t(1928).A+"",width:"1000",height:"420"})}),"\n",(0,s.jsxs)(n.p,{children:["Observability is essential for any application, and the Smart-cash project is no exception. Previously ",(0,s.jsx)(n.a,{href:"https://dev.to/aws-builders/adding-monitoring-to-eks-using-prometheus-operator-3ke1",children:"Prometheus"})," was integrated for monitoring."]}),"\n",(0,s.jsxs)(n.p,{children:["This article is part of a personal project called Smart-cash. Previous posts covered the deployment of ",(0,s.jsx)(n.a,{href:"https://dev.to/aws-builders/smartcash-project-infrastructure-terraform-and-github-actions-2bo3",children:"AWS and Kubernetes resources"})," and ",(0,s.jsx)(n.a,{href:"https://dev.to/aws-builders/smartcash-project-gitops-with-fluxcd-3aep",children:"how to install FluxCD"})," to implement GitOps practices."]}),"\n",(0,s.jsx)(n.h2,{id:"project-source-code",children:"Project Source Code"}),"\n",(0,s.jsxs)(n.p,{children:["The full project code can be found ",(0,s.jsx)(n.a,{href:"https://github.com/danielrive/smart-cash/tree/develop",children:"here"}),", the project is still under development but you can find the terraform code to create AWS resources and also the Kubernetes manifest."]}),"\n",(0,s.jsxs)(n.p,{children:["In this ",(0,s.jsx)(n.a,{href:"https://github.com/danielrive/blog-posts/tree/main/Logging-EKS-FluentBit-CloudWatch",children:"link"})," you can find the files used in this post"]}),"\n",(0,s.jsx)(n.h2,{id:"option-1-export-logs-directly-to-cloudwatch-logsno-cloudwatch-add-on",children:"Option 1. Export logs directly to Cloudwatch Logs(No Cloudwatch add-on)"}),"\n",(0,s.jsxs)(n.p,{children:["The simplest configuration involves using Fluent-Bit's Tail Input, which reads the logs in the host ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"/var/log/containers/*.log"})})," and sends them to Cloudwatch. This approach could be enough if you want to centralize the logs in CloudWatch or maybe another platform."]}),"\n",(0,s.jsx)(n.h3,{id:"fluent-bit-installation",children:"Fluent-Bit installation"}),"\n",(0,s.jsx)(n.p,{children:"The Fluent-Bit Helm chart will be used in combination with FluxCD."}),"\n",(0,s.jsx)(n.p,{children:"Adding the FluxCD source:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"kind: HelmRepository\nmetadata:\n  name: fluent-bit\n  namespace: flux-system\nspec:\n  interval: 10m0s\n  url: https://fluent.github.io/helm-charts\n"})}),"\n",(0,s.jsx)(n.h4,{id:"adding-the-helm-chart",children:"Adding the Helm chart"}),"\n",(0,s.jsxs)(n.p,{children:["The supported values for the Fluent-Bit Helm chart can be found ",(0,s.jsx)(n.a,{href:"https://github.com/fluent/helm-charts/blob/main/charts/fluent-bit/values.yaml",children:"here"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To use Fluent Bit with AWS, the following requirements must be met:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"IAM Roles for Service Accounts (IRSA)"}),": You must set up an IAM role with permissions to create CloudWatch Logs streams and write logs. This role should be associated with the service account that Fluent Bit uses. AWS EKS Pod identity is also an option."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CloudWatch Log Group"}),": You can either create the CloudWatch Log group in advance or allow Fluent Bit to handle the log group creation."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The main configuration is shown below (some lines have been omitted for brevity). The full configuration file can be found ",(0,s.jsx)(n.a,{href:"https://github.com/danielrive/blog-posts/tree/main/Logging-EKS-FluentBit-CloudWatch",children:"link"})]}),"\n",(0,s.jsx)(n.p,{children:"Fluent-Bit will run as a DaemonSet. The Helm chart will create the RBAC and the Service account, named fluent-bit, which will be annotated with the AWS IAM role with the appropriate CloudWatch permissions."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\n###ommited-lines\nspec:\n  chart:\n    spec:\n      chart: fluent-bit\n      version: 0.47.9\n      ###ommited-lines\n  values:\n    kind: DaemonSet\n    ###ommited-lines\n    serviceAccount:\n      create: true\n      annotations: \n        eks.amazonaws.com/role-arn: arn:aws:iam::${ACCOUNT_NUMBER}:role/role-fluent-bit-${ENVIRONMENT}\n    rbac:\n      create: true\n    ###ommited-lines\n"})}),"\n",(0,s.jsxs)(n.p,{children:["A volume is needed for Filesystem buffering, which helps to manage ",(0,s.jsx)(n.a,{href:"https://docs.fluentbit.io/manual/administration/buffering-and-storage#filesystem-buffering-to-the-rescue",children:"backpressure and overall memory control"}),", also this is used to store the position (or offsets) of the log files being read, allowing Fluent Bit to track its progress and resume from the correct position if needed."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"extraVolumes:\n      - name: fluentbit-status\n        hostPath:\n          path: /var/fluent-bit/state\n    extraVolumeMounts:\n      - name: fluentbit-status\n        mountPath: /var/fluent-bit/state\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Configs section defines the ",(0,s.jsx)(n.a,{href:"https://docs.fluentbit.io/manual/pipeline/inputs",children:"Inputs"}),", ",(0,s.jsx)(n.a,{href:"https://docs.fluentbit.io/manual/pipeline/filters",children:"Filters"}),", and ",(0,s.jsx)(n.a,{href:"https://docs.fluentbit.io/manual/pipeline/outputs",children:"Outputs"})," for collecting and processing data. For this scenario an Input of Tail type is configured to read the content of the files located at ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"/var/log/containers/*.log"})}),". Let's break down the configuration details:"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," AWS has some advanced configurations for inputs, filters and output, you can check this ",(0,s.jsx)(n.a,{href:"https://raw.githubusercontent.com/aws-samples/amazon-cloudwatch-container-insights/main/k8s-quickstart/cwagent-operator-rendered.yaml",children:"link"})]}),"\n",(0,s.jsx)(n.p,{children:"The service section defines the global properties for Fluent-Bit, for this case:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Flush Interval"}),": Set to 1 second, meaning Fluent Bit will send the collected logs to the configured output destinations every second."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Log Level"}),": Set to Info, which includes informational messages as well as warnings and errors."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The storage path for Filesystem buffering is the volume mounted in previous configurations with a backlog memory limit of 5M, which means that if Fluent-bit service reaches this limit, it stops loading any more backlog chunks from the storage path into memory."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"config:\n  service: |\n    [SERVICE]\n      Daemon Off\n      Flush  1\n      Log_Level  info\n      Parsers_File /fluent-bit/etc/parsers.conf\n      Parsers_File /fluent-bit/etc/conf/custom_parsers.conf\n      HTTP_Server On\n      HTTP_Listen 0.0.0.0\n      HTTP_Port  \\{\\{ .Values.metricsPort \\}\\}\n      Health_Check On\n      storage.path  /var/fluent-bit/state/flb-storage/\n      storage.sync              normal\n      storage.checksum          off\n      storage.backlog.mem_limit 5M\n"})}),"\n",(0,s.jsx)(n.p,{children:"Inputs define the data sources that Fluent Bit will collect logs from. In this scenario, the Tail input is used, which allows Fluent Bit to monitor one or more text files. Key points for this configuration include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["In common Kubernetes environments, container runtimes store logs in the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"/var/log/pod/"})})," and ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"/var/log/containers/"})})," (containers directory has symlinks to pod directory). Each log file follows a naming convention that includes key information like the pod name, namespace, container name, and container ID, for this case entries for fluent-bit, cloudwath-agent,kube-proxy, and aws-node will be ignored"]}),"\n",(0,s.jsx)(n.li,{children:"Some log entries may span multiple lines. Fluent Bit handles multi-line logs with built-in modes, and for this scenario, the Docker or CRI modes are used to process them correctly."}),"\n",(0,s.jsx)(n.li,{children:"To track the last line read from each log file, Fluent Bit uses a database to store this position. The database is saved in the previously mounted volume, ensuring that Fluent Bit can resume reading from the correct location."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"[INPUT]\n   Name                tail\n   Tag                 applications.*\n   Exclude_Path        /var/log/containers/cloudwatch-agent*, /var/log/containers/fluent-bit*, /var/log/containers/aws-node*, /var/log/containers/kube-proxy*\n   Path                /var/log/containers/*.log\n   multiline.parser    docker, cri\n   DB                  /var/fluent-bit/state/flb_container.db\n   Mem_Buf_Limit       50MB\n   Skip_Long_Lines     On\n   Refresh_Interval    10\n   storage.type        filesystem\n   Rotate_Wait         30\n"})}),"\n",(0,s.jsx)(n.p,{children:"Outputs define where the collected data is sent, and Fluent-Bit provides a plugin to send logs to CloudWatch."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you check the Input configurations there is a tag defined, ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"applications.*"})}),". this helps to assign a label to the logs collected for that Input, in this case, it ensures that logs with this tag are routed to the specified output destination."]}),"\n",(0,s.jsx)(n.li,{children:"CloudWatch log groups can be created by Fluent Bit, but in this scenario, the creation is disabled (set to off) since Terraform is used to manage log groups."}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"log_stream_prefix"})})," sets a prefix for the log streams created in CloudWatch, helping organize and identify the log entries within the stream."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"[OUTPUT]\n   Name cloudwatch_logs\n   Match applications.*\n   region ${AWS_REGION} \n   log_group_name /aws/eks/${CLUSTER_NAME}/workloads\n   log_stream_prefix from-k8-fluent-bit-\n   auto_create_group off\n"})}),"\n",(0,s.jsx)(n.p,{children:"Once you deploy the Helm chart you can check the CloudWatch service, if everything is working you should see some stream created, in this case out prefix is from-k8-fluent-bit-"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mtyh8dejch7iqqsbbnj5.png",alt:"Log-Stream"})}),"\n",(0,s.jsx)(n.p,{children:"and the log entry"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/azg2f14qnolys0nfb687.png",alt:"log-entry"})}),"\n",(0,s.jsx)(n.h4,{id:"adding-a-filter",children:"Adding a filter"}),"\n",(0,s.jsx)(n.p,{children:"Filters in Fluent Bit allow you to enrich the data being collected. For instance, the Kubernetes Filter adds valuable metadata to log entries, such as namespace, pod_name, host, and more."}),"\n",(0,s.jsx)(n.p,{children:"Here are some key points about the filter configuration:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The Tag from the input configuration is reused here to extract information like pod_name, namespace, and other relevant metadata."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The Kube_URL points to the Kubernetes API server, which Fluent Bit queries to obtain metadata about the pods involved in the logs. The path for the token and certificate is specified in Kube_CA_File and Kube_Token_File."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can configure the filter to include annotations and labels from the pods in the log entries."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Be cautious about Fluent Bit querying the API server for metadata. In clusters with a high number of resources, ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/blogs/containers/capturing-logs-at-scale-with-fluent-bit-and-amazon-eks/",children:"this can put an additional"})," load on the API server. ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/blogs/containers/capturing-logs-at-scale-with-fluent-bit-and-amazon-eks/",children:"One optimization"})," is to retrieve pod metadata from the node\u2019s kubelet instead of the kube-apiserver, but this requires enabling hostNetwork in the DaemonSet"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"[FILTER]\n   Name   kubernetes\n   Match  applications.*\n   Kube_URL      https://kubernetes.default.svc:443\n   Kube_CA_File       /var/run/secrets/kubernetes.io/serviceaccount/ca.crt\n   Kube_Token_File \n     /var/run/secrets/kubernetes.io/serviceaccount/token\n   Kube_Tag_Prefix     application.var.log.containers.\n   Merge_Log           On\n   Merge_Log_Key       log_processed\n   K8S-Logging.Parser  On\n   K8S-Logging.Exclude Off\n   Labels              On\n   Annotations         Off\n   Buffer_Size         0\n"})}),"\n",(0,s.jsx)(n.p,{children:"After applying this filter the logs should have pods metadata"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3pb61s2hu5gbth72m4xy.png",alt:"after-filter"})}),"\n",(0,s.jsx)(n.h2,{id:"option-2-use-the-amazon-cloudwatch-observability-add-on",children:"Option 2. Use the amazon-cloudwatch-observability add-on"}),"\n",(0,s.jsx)(n.p,{children:"Container Insights can be used to collect, aggregate, and summarize both metrics and logs. If you plan to enable this in your EKS cluster, the Amazon CloudWatch Observability add-on installs the necessary resources to achieve this."}),"\n",(0,s.jsx)(n.p,{children:"At a high level, the add-on installs two key components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A CloudWatch agent to collect metrics."}),"\n",(0,s.jsxs)(n.li,{children:["Fluent-Bit to collect logs, using the ",(0,s.jsx)(n.a,{href:"https://github.com/aws/aws-for-fluent-bit",children:"AWS for Fluent-bit container image"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Both components are deployed as DaemonSets."}),"\n",(0,s.jsxs)(n.p,{children:["The add-on can be installed via Terraform or by using a ",(0,s.jsx)(n.a,{href:"https://github.com/aws-observability/helm-charts/blob/main/charts/amazon-cloudwatch-observability/values.yaml",children:"Helm-chart"}),", Regardless of the method, you'll need to create an IAM role for the service account ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"cloudwatch-agent"})})," in the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"amazon-cloudwatch"})})," namespace."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'resource "aws_eks_addon" "cloudwatch" {\n  cluster_name                = aws_eks_cluster.kube_cluster.name\n  addon_name                  = "amazon-cloudwatch-observability"\n  addon_version               = ""v2.1.2-eksbuild.1""\n  service_account_role_arn    = aws_iam_role.cloudwatch_role.arn \n  resolve_conflicts_on_update = "OVERWRITE"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"The add-on creates several resources in the cluster, some of which you may not need. For example, if you list the DaemonSets in the amazon-cloudwatch namespace, you'll notice seven DaemonSets, some of which might have 0 replicas. While these resources may not be actively used, they still exist in your cluster and can create some noise."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1oxdmpgpr12lfg4q4xk8.png",alt:"addon-installed"})}),"\n",(0,s.jsx)(n.p,{children:"You can customize the add-on configurations to suit your needs. For example, you can disable Fluent Bit logs for Accelerated Compute monitoring or skip collecting NVIDIA GPU metrics."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-hcl",children:'resource "aws_eks_addon" "cloudwatch" {\n  cluster_name                = aws_eks_cluster.kube_cluster.name\n  addon_name                  = "amazon-cloudwatch-observability"\n  addon_version               = ""v2.1.2-eksbuild.1""\n  service_account_role_arn    = aws_iam_role.cloudwatch_role.arn \n  resolve_conflicts_on_update = "OVERWRITE"\n  configuration_values = jsonencode({\n    containerLogs = {\n        enabled = true\n    },    \n    agent = {\n      config = {\n        logs = {\n          metrics_collected = {\n            application_signals = {},\n            kubernetes = {\n              "enhanced_container_insights": true\n              "accelerated_compute_metrics": false\n            }}}}}\n  })\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["By default, the add-on creates four CloudWatch log groups. The following image, taken from the ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Container-Insights-setup-logs-FluentBit.html#Container-Insights-FluentBit-setup",children:"AWS documentation"}),", explains the naming structure of the log groups and the type of data each group stores."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yzv79wm5xrnu9rozjf96.png",alt:"AWS-Logs-group"})}),"\n",(0,s.jsx)(n.p,{children:"To change expiration days and names for the groups is better to use the Helm chart instead of the Terraform code to install the add-on. You can do this by modifying the fluent-bit outputs."}),"\n",(0,s.jsx)(n.p,{children:"The last log group is named performance and stores metrics collected by the CloudWatch agent, such as the number of running pods, CPU usage, and memory metrics."}),"\n",(0,s.jsx)(n.h3,{id:"bonus-cluster-dashboard",children:"Bonus: Cluster dashboard"}),"\n",(0,s.jsx)(n.p,{children:"As mentioned earlier, the CloudWatch add-on collects, aggregates, and summarizes metrics. Once the add-on is installed, AWS automatically generates a dashboard that provides useful insights and metrics for your cluster."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z8nhm4tzefmu4w1shgvr.png",alt:"Cluster-dashboard"})}),"\n",(0,s.jsx)(n.p,{children:"You can watch metric per pod"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ttwtfahdt2htcy5yh4ok.png",alt:"metric-per-pod"})}),"\n",(0,s.jsx)(n.p,{children:"It also generates a visual map that organizes Kubernetes resources by namespace."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ro4q55u98jm2pbkk8r7u.png",alt:"Cluster-resource-mapping"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1928:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/fluent-bit-logo-995cb8446c870684693ead3ced70e0d5.png"},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(6540);const o={},a=s.createContext(o);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);