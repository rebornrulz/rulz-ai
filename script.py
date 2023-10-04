import dagshub
import mlflow

dagshub.init("rulz-ai", "rebornrulz", mlflow=True)
mlflow.start_run()


mlflow.log_param("parameter name ", "value")
mlflow.log_metric("metric name", 1)

mlflow.end_run()