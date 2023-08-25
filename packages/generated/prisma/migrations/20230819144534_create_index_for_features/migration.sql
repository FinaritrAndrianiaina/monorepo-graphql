SET ivfflat.probes = 10;
CREATE INDEX ON features.profiles_features USING ivfflat ("preferenceAggregate" vector_ip_ops) WITH (lists = 50);
CREATE INDEX ON features.product_features USING ivfflat ("vector" vector_ip_ops) WITH (lists = 50);